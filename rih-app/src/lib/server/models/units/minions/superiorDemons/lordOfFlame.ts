import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class LordOfFlame extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.minions.superiorDemons.lordOfFlame.cost,
            unitConfig.demons.minions.superiorDemons.lordOfFlame.move,
            unitConfig.demons.minions.superiorDemons.lordOfFlame.life,
            unitConfig.demons.minions.superiorDemons.lordOfFlame.combat,
            unitConfig.demons.minions.superiorDemons.lordOfFlame.canFly,
            unitConfig.demons.minions.superiorDemons.lordOfFlame.name,
            unitConfig.demons.minions.superiorDemons.class,
            unitConfig.defaultRules,
        );
    }
}
