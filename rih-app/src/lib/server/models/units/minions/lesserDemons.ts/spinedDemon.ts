import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class SpinedDemon extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.minions.lesserDemons.spinedDemon.cost,
            unitConfig.demons.minions.lesserDemons.spinedDemon.move,
            unitConfig.demons.minions.lesserDemons.spinedDemon.life,
            unitConfig.demons.minions.lesserDemons.spinedDemon.combat,
            unitConfig.demons.minions.lesserDemons.spinedDemon.canFly,
            unitConfig.demons.minions.lesserDemons.spinedDemon.name,
            unitConfig.demons.minions.lesserDemons.class,
            unitConfig.defaultRules,
        );
    }
}
