import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class SlaughterFiend extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.minions.lesserDemons.slaughterFiend.cost,
            unitConfig.demons.minions.lesserDemons.slaughterFiend.move,
            unitConfig.demons.minions.lesserDemons.slaughterFiend.life,
            unitConfig.demons.minions.lesserDemons.slaughterFiend.combat,
            unitConfig.demons.minions.lesserDemons.slaughterFiend.canFly,
            unitConfig.demons.minions.lesserDemons.slaughterFiend.name,
            unitConfig.demons.minions.lesserDemons.class,
            unitConfig.defaultRules,
        );
    }
}
