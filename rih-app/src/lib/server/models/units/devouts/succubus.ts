import { BaseUnit } from '../baseUnit';
import { CanFly } from '../../enums/canFly';
import { DefaultRules } from '../../enums/defaultRules';
import { DemonClass } from '../../enums/demonClass';

import unitConfig from '../../../../../../config.units.json';

export class Succubus extends BaseUnit {
    cost: number = 0;
    move: number = 6;
    life: number = 9;
    combat: number = 4;
    canFly: CanFly = CanFly.Yes;
    name: string = 'Succubus';
    className: string = 'Devouts';
    classEnum: DemonClass = DemonClass.Devouts;
    defaultRules: DefaultRules = DefaultRules.Yes;
    dateCreated: Date = new Date();
    dateModified: Date = new Date();

    constructor() {
        super(
            unitConfig.demons.devouts.succubus.cost,
            unitConfig.demons.devouts.succubus.move,
            unitConfig.demons.devouts.succubus.life,
            unitConfig.demons.devouts.succubus.combat,
            unitConfig.demons.devouts.succubus.canFly,
            unitConfig.demons.devouts.succubus.name,
            unitConfig.demons.devouts.class,
            unitConfig.defaultRules,
        );
    }
}
