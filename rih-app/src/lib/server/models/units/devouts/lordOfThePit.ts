import { BaseUnit } from '../baseUnit';

import unitConfig from '../../../../../../config.units.json';

export class LordOfThePit extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.devouts.lordOfThePit.cost,
            unitConfig.demons.devouts.lordOfThePit.move,
            unitConfig.demons.devouts.lordOfThePit.life,
            unitConfig.demons.devouts.lordOfThePit.combat,
            unitConfig.demons.devouts.lordOfThePit.canFly,
            unitConfig.demons.devouts.lordOfThePit.demonName,
            unitConfig.demons.devouts.class,
            unitConfig.defaultRules,
        );
    }
}
