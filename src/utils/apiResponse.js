class apiResponse {

    constructor(statusCode, data, message="Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message,
        this.success = statusCode < 400 // here status code must be below 400, if above 400 it is error
    }
}

export {apiResponse};