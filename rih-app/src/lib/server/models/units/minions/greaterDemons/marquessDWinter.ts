import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class MarquessDWinter extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.minions.greaterDemons.marquessDWinter.cost,
            unitConfig.demons.minions.greaterDemons.marquessDWinter.move,
            unitConfig.demons.minions.greaterDemons.marquessDWinter.life,
            unitConfig.demons.minions.greaterDemons.marquessDWinter.combat,
            unitConfig.demons.minions.greaterDemons.marquessDWinter.canFly,
            unitConfig.demons.minions.greaterDemons.marquessDWinter.name,
            unitConfig.demons.minions.greaterDemons.class,
            unitConfig.defaultRules,
        );
    }
}
