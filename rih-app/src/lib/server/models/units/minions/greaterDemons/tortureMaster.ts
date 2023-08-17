import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class TortureMaster extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.minions.greaterDemons.tortureMaster.cost,
            unitConfig.demons.minions.greaterDemons.tortureMaster.move,
            unitConfig.demons.minions.greaterDemons.tortureMaster.life,
            unitConfig.demons.minions.greaterDemons.tortureMaster.combat,
            unitConfig.demons.minions.greaterDemons.tortureMaster.canFly,
            unitConfig.demons.minions.greaterDemons.tortureMaster.name,
            unitConfig.demons.minions.greaterDemons.class,
            unitConfig.defaultRules,
        );
    }
}
