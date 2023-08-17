import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class VenomQueen extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.minions.superiorDemons.venomQueen.cost,
            unitConfig.demons.minions.superiorDemons.venomQueen.move,
            unitConfig.demons.minions.superiorDemons.venomQueen.life,
            unitConfig.demons.minions.superiorDemons.venomQueen.combat,
            unitConfig.demons.minions.superiorDemons.venomQueen.canFly,
            unitConfig.demons.minions.superiorDemons.venomQueen.name,
            unitConfig.demons.minions.superiorDemons.class,
            unitConfig.defaultRules,
        );
    }
}
