import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class ArmoredDemon extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.minions.lesserDemons.armoredDemon.cost,
            unitConfig.demons.minions.lesserDemons.armoredDemon.move,
            unitConfig.demons.minions.lesserDemons.armoredDemon.life,
            unitConfig.demons.minions.lesserDemons.armoredDemon.combat,
            unitConfig.demons.minions.lesserDemons.armoredDemon.canFly,
            unitConfig.demons.minions.lesserDemons.armoredDemon.name,
            unitConfig.demons.minions.lesserDemons.class,
            unitConfig.defaultRules,
        );
    }
}
