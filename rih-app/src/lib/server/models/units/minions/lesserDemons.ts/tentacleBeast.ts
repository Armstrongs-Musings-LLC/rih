import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class TentacleBeast extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.minions.lesserDemons.tentacleBeast.cost,
            unitConfig.demons.minions.lesserDemons.tentacleBeast.move,
            unitConfig.demons.minions.lesserDemons.tentacleBeast.life,
            unitConfig.demons.minions.lesserDemons.tentacleBeast.combat,
            unitConfig.demons.minions.lesserDemons.tentacleBeast.canFly,
            unitConfig.demons.minions.lesserDemons.tentacleBeast.name,
            unitConfig.demons.minions.lesserDemons.class,
            unitConfig.defaultRules,
        );
    }
}
