import express from 'express'

let applogger = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    //track url, method, time, date
    let url = request.url
    let method = request.method
    let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()
    let result = `[${url}] [${method}] - [${date}] [${time}]`
    console.log(result)
    next()
}

export default applogger