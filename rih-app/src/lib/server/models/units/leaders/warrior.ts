import { BaseUnit } from '../baseUnit';

import unitConfig from '../../../../../../config.units.json';

export class Warrior extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.leaders.warrior.cost,
            unitConfig.demons.leaders.warrior.move,
            unitConfig.demons.leaders.warrior.life,
            unitConfig.demons.leaders.warrior.combat,
            unitConfig.demons.leaders.warrior.canFly,
            unitConfig.demons.leaders.warrior.name,
            unitConfig.demons.leaders.class,
            unitConfig.defaultRules,
        );
    }
}
