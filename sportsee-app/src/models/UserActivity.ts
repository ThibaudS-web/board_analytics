export class UserActivity {
    userId: number
    sessions: SessionActivity[]
    constructor(userId: number, sessions: SessionActivity[]) {
        this.userId = userId
        this.sessions = sessions
    }
}

class SessionActivity {
    day: string
    kilogram: number
    calories: number
    constructor(day: string, kilogram: number, calories: number) {
        this.day = day
        this.kilogram = kilogram
        this.calories = calories
    }
}

export class SessionActivityWrapper {
    private sessionActivity: SessionActivity
    constructor(sessionActivity: SessionActivity) {
        this.sessionActivity = sessionActivity
    }

    // We create a computed property which will be used in ChartBar component.
    // We can't use a function as the component needs a static string for the property key.
    get ['day'](): number {
        return new Date(this.sessionActivity.day).getDate()
    }

    get ['kilogram'](): number {
        return this.sessionActivity.kilogram
    }

    get ['calories'](): number {
        return this.sessionActivity.calories /*Nom du champ*/
    }
}
