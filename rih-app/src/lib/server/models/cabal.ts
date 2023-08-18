import type { BaseUnit } from '../models/units/baseUnit';

import { Guid } from 'guid-typescript';

export class Cabal {
    id: Guid;
    name: string;
    defaultRules: boolean;
    playorId: string;
    units: BaseUnit[];
    dateCreated: Date;
    dateModified: Date;

    constructor(name: string, defaultRules: boolean, playorId: string, units: BaseUnit[]) {
        this.id = Guid.create();
        this.name = name;
        this.defaultRules = defaultRules;
        this.playorId = playorId;
        this.units = units;
        this.dateCreated = new Date();
        this.dateModified = new Date();
    }
}
