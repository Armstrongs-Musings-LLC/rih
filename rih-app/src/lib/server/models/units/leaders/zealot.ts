import { BaseUnit } from '../baseUnit';

import unitConfig from '../../../../../../config.units.json';

export class Zealot extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.leaders.zealot.cost,
            unitConfig.demons.leaders.zealot.move,
            unitConfig.demons.leaders.zealot.life,
            unitConfig.demons.leaders.zealot.combat,
            unitConfig.demons.leaders.zealot.canFly,
            unitConfig.demons.leaders.zealot.name,
            unitConfig.demons.leaders.class,
            unitConfig.defaultRules,
        );
    }
}
