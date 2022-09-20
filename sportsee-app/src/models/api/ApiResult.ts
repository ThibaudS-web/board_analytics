export class ApiResult<T> {
    data: T
    constructor(data: T) {
        this.data = data
    }
}
