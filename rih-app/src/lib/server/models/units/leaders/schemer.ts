import { BaseUnit } from '../baseUnit';

import unitConfig from '../../../../../../config.units.json';

export class Schemer extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.leaders.schemer.cost,
            unitConfig.demons.leaders.schemer.move,
            unitConfig.demons.leaders.schemer.life,
            unitConfig.demons.leaders.schemer.combat,
            unitConfig.demons.leaders.schemer.canFly,
            unitConfig.demons.leaders.schemer.name,
            unitConfig.demons.leaders.class,
            unitConfig.defaultRules,
        );
    }
}
