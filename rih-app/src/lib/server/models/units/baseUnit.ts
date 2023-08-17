import { CanFly } from '../enums/canFly';
import { DefaultRules } from '../enums/defaultRules';
import { DemonClass } from '../enums/demonClass';

import unitConfig from '../../../../../config.units.json';

import { Guid } from 'guid-typescript';

export class BaseUnit {
    id: Guid;
    cost: number;
    move: number;
    life: number;
    combat: number;
    canFly: CanFly;
    name: string;
    className: string;
    classEnum: DemonClass;
    defaultRules: DefaultRules;
    dateCreated: Date;
    dateModified: Date;
    constructor(
        cost: number,
        move: number,
        life: number,
        combat: number,
        canFly: boolean,
        name: string,
        classEnum: number,
        defaultRules: boolean,
    ) {
        this.id = Guid.create();
        this.cost = cost;
        this.move = move;
        this.life = life;
        this.combat = combat;
        this.canFly = canFly ? CanFly.Yes : CanFly.No;
        this.name = name;
        this.className = '';
        this.classEnum = DemonClass.None;
        this.defaultRules = defaultRules ? DefaultRules.Yes : DefaultRules.No;
        this.dateCreated = new Date();
        this.dateModified = new Date();

        switch (classEnum) {
            case 0:
                this.classEnum = DemonClass.None;
            case 1:
                this.classEnum = DemonClass.LesserDemons;
            case 2:
                this.classEnum = DemonClass.GreaterDemons;
            case 3:
                this.classEnum = DemonClass.SuperiorDemons;
            case 4:
                this.classEnum = DemonClass.Devouts;
                this.className = unitConfig.demons.devouts.name;
            case 5:
                this.classEnum = DemonClass.Leaders;
        }
    }
}
