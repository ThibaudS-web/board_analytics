import SessionActivity from "../../models/user-activity/SessionActivity"

/**
 * @description Wrapper classes format model fields into displayable data. This class only formats fields needed for UI. 
 * This wrapping layer enables us to separate UI logic (wrapper class) from business logic (model class).
 * 
 * We create a computed property which will be used in ChartBar component.
 * We can't use a function as the component needs a static string for the property key.
 */

class SessionActivityWrapper {
    private sessionActivity: SessionActivity
    constructor(sessionActivity: SessionActivity) {
        this.sessionActivity = sessionActivity
    }

    get ['day'](): number {
        return new Date(this.sessionActivity.day).getDate()
    }

    get ['kilogram'](): number {
        return this.sessionActivity.kilogram
    }

    get ['calories'](): number {
        return this.sessionActivity.calories
    }
}

export default SessionActivityWrapper
