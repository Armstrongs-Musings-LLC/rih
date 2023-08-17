import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class SerpentKnight extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.minions.greaterDemons.serpentKnight.cost,
            unitConfig.demons.minions.greaterDemons.serpentKnight.move,
            unitConfig.demons.minions.greaterDemons.serpentKnight.life,
            unitConfig.demons.minions.greaterDemons.serpentKnight.combat,
            unitConfig.demons.minions.greaterDemons.serpentKnight.canFly,
            unitConfig.demons.minions.greaterDemons.serpentKnight.name,
            unitConfig.demons.minions.greaterDemons.class,
            unitConfig.defaultRules,
        );
    }
}
