/** @type {import('./$types').PageLoad} */

import philosophiesConfig from '../../../../config.philosophies.json';

export function load() {
    const serializedPhilosophy: { name: string; id: number }[] = [];

    philosophiesConfig.forEach((config) => {
        serializedPhilosophy.push({
            name: config.philosophy.name,
            id: config.id,
        });
    });
    return {
        serializedPhilosophy,
    };
}
