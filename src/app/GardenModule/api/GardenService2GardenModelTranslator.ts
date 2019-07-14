// tslint:disable-next-line:max-line-length
import { ServerGarden, ServerPlant, ServerSimpleProgram, ServerSprinkler, ServerTimePattern, ServerDay, ServerHour, ServerLink } from './ServerGardenModel';
import { Injectable } from '@angular/core';
import { Garden, Plant, SimpleProgram, Sprinkler, TimePattern, Day, Hour } from '../state/state';
import { GardenData, PlantData, SimpleProgramData, SprinklerData, DayData, HourData, Status } from '../state/models';
import { List } from 'immutable';

@Injectable()
export class GardenService2GardenModelTranslator {
  // temporary, need them to compute the plant.
  private simplePrograms: SimpleProgram[] = [];
  private sprinklers: Sprinkler[] = [];
  constructor() {}

  // Attention! - must to get the simplePrograms and sprinklers before the plants.
  translate = (serverGarden: ServerGarden): Garden => {

    // garden data
    const gardenData = new GardenData(serverGarden.name);

    // simplePrograms
    // const simplePrograms: SimpleProgram[] = [];
    for (const sProgram of serverGarden.programs) {
      this.simplePrograms.push(this.translateSimpleProgram(sProgram));
    }

    // sprinklers
    // const sprinklers: Sprinkler[] = [];
    for (const serverSprinkler of serverGarden.sprinklers) {
      this.sprinklers.push(this.translateSprinkler(serverSprinkler));
    }

    // plants
    const plants: Plant[] = [];
    for (const serverPlant of serverGarden.plants) {
      plants.push(this.translatePlant(serverPlant));
    }

    const garden = new Garden(gardenData, List<Plant>(plants), List<SimpleProgram>(this.simplePrograms), List<Sprinkler>(this.sprinklers));

    // cleanup
    this.simplePrograms = [];
    this.sprinklers = [];

    return garden;
  }

  private findLinkWithRel(rel: string, links: ServerLink[]): ServerLink {
    for (const link of links) {
      if (link.rel === rel) {
        return link;
      }
    }
    return null;
  }

  private getProgramFromLinks(links: ServerLink[]): SimpleProgram {
    if (links === undefined) {
      return null;
    }
    const link = this.findLinkWithRel('program', links);
    if (link === null) {
      return null;
    }
    const id: number = +link.href.split('/')[2];

    for (const program of this.simplePrograms) {
      if (program.simpleProgramData.id === id) {
        return program;
      }
    }
  }

  private getSprinklerFromLinks(links: ServerLink[]): Sprinkler {
    if (links === undefined) {
      return null;
    }
    const link = this.findLinkWithRel('sprinkler', links);
    if (link === null) {
      return null;
    }
    const id: number = +link.href.split('/')[2];
    for (const sprinkler of this.sprinklers) {
      if (sprinkler.sprinklerData.id === id) {
        return sprinkler;
      }
    }
  }

  private translatePlant(serverPlant: ServerPlant): Plant {
    const plantData = new PlantData(serverPlant.id, serverPlant.name);
    const program: SimpleProgram  = this.getProgramFromLinks(serverPlant.links);
    const sprinkler: Sprinkler = this.getSprinklerFromLinks(serverPlant.links);
    return new Plant(plantData, sprinkler, program);
    // return new Plant(plantData, this.translateSprinkler(serverPlant.sprinkler), this.translateSimpleProgram(serverPlant.program));
  }

  private translateSimpleProgram(simpleProgram: ServerSimpleProgram): SimpleProgram {
    if (simpleProgram === null) {
      return null;
    }
    const sProgData = new SimpleProgramData(simpleProgram.id, simpleProgram.name);
    return new SimpleProgram(sProgData, this.translateTimePattern(simpleProgram.timePattern));
  }

  private translateSprinkler(serverSprinkler: ServerSprinkler): Sprinkler {
    if (serverSprinkler === null) {
      return null;
    }
    const sprinklerData = new SprinklerData(serverSprinkler.id, serverSprinkler.status === 'On' ? Status.On : Status.Off);
    return new Sprinkler(sprinklerData);
  }

  private translateTimePattern(serverTimePattern: ServerTimePattern): TimePattern {
    const days: Day[] = [];
    for (const day of serverTimePattern.days) {
      days.push(this.translateDay(day));
    }
    return new TimePattern(List<Day>(days));
  }

  private translateDay(serverDay: ServerDay): Day {
    const dayData = new DayData(serverDay.id);

    const hours: Hour[] = [];
    for (const hour of serverDay.hours) {
      hours.push(this.translateHour(hour));
    }

    return new Day(dayData, List<Hour>(hours));
  }

  private translateHour(serverHour: ServerHour): Hour {
    const hourData = new HourData(serverHour.id, serverHour.hour, serverHour.min, serverHour.duration);
    return new Hour(hourData);
  }

}
