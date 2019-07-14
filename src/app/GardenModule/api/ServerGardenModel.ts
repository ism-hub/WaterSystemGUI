// import { Status } from '../state/models';



 // enum SprinklerStatus { 'Off', 'On', }

export class ServerSprinkler {
    id: number;
    status: 'Off' | 'On';
}

export class ServerSimpleProgram {
    id: number;
    name: string;
    timePattern: ServerTimePattern;
}

export class ServerLink {
    rel: string;
    href: string;
}

export class ServerPlant {
    id: number;
    name: string;
    links: ServerLink[];
    // sprinkler: ServerSprinkler;
    // program: ServerSimpleProgram;
}

export class ServerGarden {
    plants: ServerPlant[];
    sprinklers: ServerSprinkler[];
    programs: ServerSimpleProgram[];
    name: string;
}


// TimePattern.h

export class ServerHour {
  id: number;
  hour: number;
  min: number;
  duration: number;
}

export class ServerDay {
    id: number;
    hours: ServerHour[];
}

export class ServerTimePattern {
    days: ServerDay[];
}
