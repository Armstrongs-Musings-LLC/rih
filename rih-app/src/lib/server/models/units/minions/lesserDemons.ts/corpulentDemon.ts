import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class CorpulentDemon extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.minions.lesserDemons.corpulentDemon.cost,
            unitConfig.demons.minions.lesserDemons.corpulentDemon.move,
            unitConfig.demons.minions.lesserDemons.corpulentDemon.life,
            unitConfig.demons.minions.lesserDemons.corpulentDemon.combat,
            unitConfig.demons.minions.lesserDemons.corpulentDemon.canFly,
            unitConfig.demons.minions.lesserDemons.corpulentDemon.name,
            unitConfig.demons.minions.lesserDemons.class,
            unitConfig.defaultRules,
        );
    }
}
