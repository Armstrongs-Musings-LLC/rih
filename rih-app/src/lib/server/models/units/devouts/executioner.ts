import { BaseUnit } from '../baseUnit';

import unitConfig from '../../../../../../config.units.json';

export class Executioner extends BaseUnit {
    constructor() {
        super(
            unitConfig.demons.devouts.executioner.cost,
            unitConfig.demons.devouts.executioner.move,
            unitConfig.demons.devouts.executioner.life,
            unitConfig.demons.devouts.executioner.combat,
            unitConfig.demons.devouts.executioner.canFly,
            unitConfig.demons.devouts.executioner.name,
            unitConfig.demons.devouts.class,
            unitConfig.defaultRules,
        );
    }
}
