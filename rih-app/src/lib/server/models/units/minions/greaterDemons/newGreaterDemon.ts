import { BaseUnit } from '../../baseUnit';

import unitConfig from '../../../../../../../config.units.json';

export class NewGreaterDemon extends BaseUnit {
    constructor(
        cost: number,
        move: number,
        life: number,
        combat: number,
        canFly: boolean,
        demonName: string,
        defaultRules: boolean,
    ) {
        super(
            cost,
            move,
            life,
            combat,
            canFly,
            demonName,
            unitConfig.demons.devouts.class,
            defaultRules,
        );
    }
}
