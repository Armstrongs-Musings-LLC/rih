import { BaseUnit } from '../baseUnit';

import unitConfig from '../../../../../../config.units.json';

export class MadnessDemon extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.devouts.madnessDemon.cost,
            unitConfig.demons.devouts.madnessDemon.move,
            unitConfig.demons.devouts.madnessDemon.life,
            unitConfig.demons.devouts.madnessDemon.combat,
            unitConfig.demons.devouts.madnessDemon.canFly,
            unitConfig.demons.devouts.madnessDemon.name,
            unitConfig.demons.devouts.class,
            unitConfig.defaultRules,
        );
    }
}
