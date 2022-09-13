//============================ MODEL API =============================//
export class UserPerformanceAPI {
    userId: number
    // Kind object is not needed locally, it won't be mapped into model
    kind: unknown
    data: DataPerformanceAPI[]
    constructor(userId: number, kind: unknown, data: DataPerformanceAPI[]) {
        this.userId = userId
        this.kind = kind
        this.data = data
    }
}

export class DataPerformanceAPI {
    kind: number
    value: number
    constructor(kind: number, value: number) {
        this.kind = kind
        this.value = value
    }
}

//============================ MODEL LOCAL =============================//
export class UserPerformance {
    userId: number
    data: DataPerformance[]
    constructor(userId: number, data: DataPerformance[]) {
        this.userId = userId
        this.data = data
    }
}

export enum Kind {
    CARDIO = 'CARDIO',
    ENERGY = 'ENERGY',
    ENDURANCE = 'ENDURANCE',
    STRENGTH = 'STRENGTH',
    SPEED = 'SPEED',
    INTENSITY = 'INTENSITY',
    UNKNOWN = 'UNKNOWN',
}

export class DataPerformance {
    kind: Kind
    value: number
    constructor(kind: Kind, value: number) {
        this.kind = kind
        this.value = value
    }
}

export class PerformanceRadarCharData {
    label: string | null
    value: number
    constructor(label: string | null, value: number) {
        this.label = label
        this.value = value
    }
}
