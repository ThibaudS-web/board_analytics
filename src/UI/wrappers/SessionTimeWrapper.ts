import SessionTime from '../../models/user-average-session/SessionTime'

/**
 * @description Wrapper classes format model fields into displayable data. This class only formats fields needed for UI. 
 * This wrapping layer enables us to separate UI logic (wrapper class) from business logic (model class).
 * 
 * This class uses computed properties to be able to use the data with the recharts library.
 */

class SessionTimeWrapper {
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

export default SessionTimeWrapper
