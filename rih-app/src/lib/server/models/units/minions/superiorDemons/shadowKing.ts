import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class ShadowKing extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.minions.superiorDemons.shadowKing.cost,
            unitConfig.demons.minions.superiorDemons.shadowKing.move,
            unitConfig.demons.minions.superiorDemons.shadowKing.life,
            unitConfig.demons.minions.superiorDemons.shadowKing.combat,
            unitConfig.demons.minions.superiorDemons.shadowKing.canFly,
            unitConfig.demons.minions.superiorDemons.shadowKing.name,
            unitConfig.demons.minions.superiorDemons.class,
            unitConfig.defaultRules,
        );
    }
}
