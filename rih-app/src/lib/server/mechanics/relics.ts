import { Damage } from '../models/enums/damage';
import { DiceRoll } from '../models/enums/diceRoll';
import { Movement } from '../models/enums/movement';
import { Protection } from '../models/enums/protection';

export function screamingShield(potentialDamage: number): number {
    switch (potentialDamage < Damage.Two) {
        case true:
            return Damage.None;
        case false:
            return potentialDamage;
    }
}

export function infernaalArmor(potentialDamage: number): number {
    return potentialDamage - Protection.One;
}

export function hammerOfThunder(diceRole: number): number {
    switch (diceRole) {
        case DiceRoll.D6:
            return Damage.Two;
        default:
            return Damage.None;
    }
}

export function axeOfBlackBlood(attackRole: number): number {
    return attackRole + Damage.One;
}

export function plateOfRimeIce(defenseRole: number, movement: number): number {
    switch (defenseRole) {
        case DiceRoll.D6:
            return Movement.None;
        default:
            return movement;
    }
}
