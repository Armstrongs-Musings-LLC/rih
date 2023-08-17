/** @type {import('./$types').PageLoad} */

import { NewDevout } from '$lib/server/models/units/devouts/newDevout';
import { Executioner } from '$lib/server/models/units/devouts/executioner';

export function load() {
    const newDevoutInstance = new NewDevout(0, 1, 1, 1, true, 'Mister Demon', true);
    const executionerInstance = new Executioner();

    const serializedNewDevout = {
        id: newDevoutInstance.id.toJSON().value,
        cost: newDevoutInstance.cost,
        move: newDevoutInstance.move,
        life: newDevoutInstance.life,
        combat: newDevoutInstance.combat,
        fly: newDevoutInstance.canFly,
        demonName: newDevoutInstance.name,
    };

    const serializedExecutioner = {
        id: executionerInstance.id.toJSON().value,
        cost: executionerInstance.cost,
        move: executionerInstance.move,
        life: executionerInstance.life,
        combat: executionerInstance.combat,
        fly: executionerInstance.canFly,
        demonName: executionerInstance.name,
    };

    return {
        serializedNewDevout,
        serializedExecutioner,
    };
}
