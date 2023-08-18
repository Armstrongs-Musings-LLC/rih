import { DiceRoll } from '../models/enums/diceRoll';
import { Damage } from '../models/enums/damage';
import { Life } from '../models/enums/life';
import { Movement } from '../models/enums/movement';

export function poisonedSoul(naturalDiceRole: number): number {
    switch (naturalDiceRole) {
        case DiceRoll.D6:
            return Damage.Two;
        default:
            return Damage.None;
    }
}

export function unyieldingEssence(): number {
    return Life.Two;
}

export function explosiveSpirit(): number {
    return Damage.One;
}

export function skirmishSpirit(): number {
    return Movement.ThreeInches;
}

export function regeneratingSoul(): number {
    return Life.One;
}
