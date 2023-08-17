import { BaseUnit } from '../baseUnit';

import unitConfig from '../../../../../../config.units.json';

export class VoidDemon extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.devouts.tallyman.cost,
            unitConfig.demons.devouts.tallyman.move,
            unitConfig.demons.devouts.tallyman.life,
            unitConfig.demons.devouts.tallyman.combat,
            unitConfig.demons.devouts.tallyman.canFly,
            unitConfig.demons.devouts.tallyman.name,
            unitConfig.demons.devouts.class,
            unitConfig.defaultRules,
        );
    }
}
