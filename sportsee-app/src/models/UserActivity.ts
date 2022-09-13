export class UserActivity {
    userId: number
    sessions: SessionActivity[]
    constructor(userId: number, sessions: SessionActivity[]) {
        this.userId = userId
        this.sessions = sessions
    }
}

class SessionActivity {
    day: Date
    kilogram: number
    calories: number
    constructor(day: Date, kilogram: number, calories: number) {
        this.day = day
        this.kilogram = kilogram
        this.calories = calories
    }
}
