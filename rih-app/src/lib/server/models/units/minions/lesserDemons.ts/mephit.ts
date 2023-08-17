import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class Mephit extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.minions.lesserDemons.mephit.cost,
            unitConfig.demons.minions.lesserDemons.mephit.move,
            unitConfig.demons.minions.lesserDemons.mephit.life,
            unitConfig.demons.minions.lesserDemons.mephit.combat,
            unitConfig.demons.minions.lesserDemons.mephit.canFly,
            unitConfig.demons.minions.lesserDemons.mephit.name,
            unitConfig.demons.minions.lesserDemons.class,
            unitConfig.defaultRules,
        );
    }
}
