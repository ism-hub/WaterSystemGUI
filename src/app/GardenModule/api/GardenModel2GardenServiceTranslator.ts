// tslint:disable-next-line:max-line-length
import { ServerGarden, ServerPlant, ServerSimpleProgram, ServerSprinkler, ServerTimePattern, ServerDay, ServerHour, ServerLink } from './ServerGardenModel';
import { Injectable } from '@angular/core';
import { Garden, Plant, SimpleProgram, Sprinkler, TimePattern, Day, Hour } from '../state/state';
import { GardenData, PlantData, SimpleProgramData, SprinklerData, DayData, HourData, Status } from '../state/models';
import { List } from 'immutable';

@Injectable()
export class GardenModel2GardenServiceTranslator {

  constructor() {}

  // Attention! - must to get the simplePrograms and sprinklers before the plants.
  translate = (garden: Garden): ServerGarden => {

    // garden data
    const serverGarden = new ServerGarden();
    serverGarden.name = garden.gardenData.name;

    // simplePrograms
    const serverPrograms: ServerSimpleProgram[] = [];
    garden.simplePrograms.forEach(program => serverPrograms.push(this.translateSimpleProgram(program)));
    // for (const program of garden.simplePrograms) {
    //  serverPrograms.push(this.translateSimpleProgram(program));
    // }

    // sprinklers
    const serverSprinklers: ServerSprinkler[] = [];
    garden.sprinklers.forEach(sprinkler => serverSprinklers.push(this.translateSprinkler(sprinkler)));
    // for (const serverSprinkler of serverGarden.sprinklers) {
    //  sprinklers.push(this.translateSprinkler(serverSprinkler));
    // }

    // plants
    const serverPlants: ServerPlant[] = [];
    garden.plants.forEach(plant => serverPlants.push(this.translatePlant(plant)));
    // for (const plant of garden.plants) {
    //  serverPlants.push(this.translatePlant(plant));
    // }

    serverGarden.plants = serverPlants;
    serverGarden.programs = serverPrograms;
    serverGarden.sprinklers = serverSprinklers;

    return serverGarden;
  }

  private findLinkWithRel(rel: string, links: ServerLink[]): ServerLink {
    for (const link of links) {
      if (link.rel === rel) {
        return link;
      }
    }
    return null;
  }

  private getLinkFromProgram(program: SimpleProgram): ServerLink {
    if (program === null) {
      return null;
    }
    const rel = 'program';
    const href = '/programs/' + program.simpleProgramData.id;
    const link: ServerLink = {rel, href};
    return link;
  }

  private getLinkFromSprinkler(sprinkler: Sprinkler): ServerLink {
    if (sprinkler === null) {
      return null;
    }
    const rel = 'sprinkler';
    const href = '/sprinklers/' + sprinkler.sprinklerData.id;
    const link: ServerLink = {rel, href};
    return link;
  }

  private getPlantLinks(plant: Plant): ServerLink[] {
    const programLink: ServerLink  = this.getLinkFromProgram(plant.simpleProgram);
    const sprinklerLink: ServerLink = this.getLinkFromSprinkler(plant.sprinkler);

    const links: ServerLink[] = [];
    if (programLink !== null) {
      links.push(programLink);
    }
    if (sprinklerLink !== null) {
      links.push(sprinklerLink);
    }

    return links;
  }

  private translatePlant(plant: Plant): ServerPlant {
    // const plantData = new PlantData(serverPlant.id, serverPlant.name);
    const serverPlant = new ServerPlant();

    const links: ServerLink[] = this.getPlantLinks(plant);

    serverPlant.links = links;
    serverPlant.id = plant.plantData.id;
    serverPlant.name = plant.plantData.name;
    return serverPlant;
    // return new Plant(plantData, this.translateSprinkler(serverPlant.sprinkler), this.translateSimpleProgram(serverPlant.program));
  }

  private translateSimpleProgram(simpleProgram: SimpleProgram): ServerSimpleProgram {
    if (simpleProgram === null) {
      return null;
    }
    const program = new ServerSimpleProgram();
    program.id = simpleProgram.simpleProgramData.id;
    program.name = simpleProgram.simpleProgramData.name;
    program.timePattern = this.translateTimePattern(simpleProgram.timePattern);
    return program;
  }

  private translateSprinkler(sprinkler: Sprinkler): ServerSprinkler {
    if (sprinkler === null) {
      return null;
    }
    const serverSprinkler = new ServerSprinkler();
    serverSprinkler.id = sprinkler.sprinklerData.id;
    serverSprinkler.status = sprinkler.sprinklerData.status === Status.On ? 'On' : 'Off';
    return serverSprinkler;
  }

  private translateTimePattern(modelTimePattern: TimePattern): ServerTimePattern {
    const days: ServerDay[] = [];

    modelTimePattern.days.forEach(day => days.push(this.translateDay(day)));
    // for (const day of modelTimePattern.days) {
    //  days.push(this.translateDay(day));
    // }
    const serverTimePattern = new ServerTimePattern();
    serverTimePattern.days = days;
    return serverTimePattern;
  }

  private translateDay(day: Day): ServerDay {
    const serverDay = new ServerDay();

    const hours: ServerHour[] = [];

    day.hours.forEach(hour => hours.push(this.translateHour(hour)));

    // for (const hour of day.hours) {
    //  hours.push(this.translateHour(hour));
    // }

    serverDay.id = day.dayData.id;
    serverDay.hours = hours;
    return serverDay;
  }

  private translateHour(hour: Hour): ServerHour {
    const serverHour = new ServerHour(); // aserverHour.id, serverHour.hour, serverHour.min);
    serverHour.id = hour.hourData.id;
    serverHour.hour = hour.hourData.hour;
    serverHour.min = hour.hourData.min;
    serverHour.duration = hour.hourData.duration;
    return serverHour;
  }

}
