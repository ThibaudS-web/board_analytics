export class UserAverageSessions {
    userId: number
    sessions: SessionTime[]
    constructor(userId: number, sessions: SessionTime[]) {
        this.userId = userId
        this.sessions = sessions
    }
}

export class SessionTime {
    day: number
    sessionLength: number
    constructor(day: number, sessionLength: number) {
        this.day = day
        this.sessionLength = sessionLength
    }
}

export class SessionTimeWrapper {
    private sessionTime: SessionTime
    constructor(sessionTime: SessionTime) {
        this.sessionTime = sessionTime
    }

    get ['sessionLength'](): number {
        return this.sessionTime.sessionLength
    }

    get ['day'](): string {
        switch (this.sessionTime.day) {
            case 1:
                return 'L'
            case 2:
                return 'M'
            case 3:
                return 'M'
            case 4:
                return 'J'
            case 5:
                return 'V'
            case 6:
                return 'S'
            case 7:
                return 'D'
            default:
                return 'Not a day'
        }
    }
}
