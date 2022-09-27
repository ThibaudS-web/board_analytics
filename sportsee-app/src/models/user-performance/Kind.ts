/**
 * @description We use an enum to list the different types of user statistics
 * {@link https://www.typescriptlang.org/docs/handbook/enums.html} for check enum type.
 */

enum Kind {
    CARDIO = 'CARDIO',
    ENERGY = 'ENERGY',
    ENDURANCE = 'ENDURANCE',
    STRENGTH = 'STRENGTH',
    SPEED = 'SPEED',
    INTENSITY = 'INTENSITY',
    UNKNOWN = 'UNKNOWN',
}

export default Kind