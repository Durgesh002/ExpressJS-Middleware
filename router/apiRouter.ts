import express from 'express'

const apiRouter: express.Router = express.Router()

apiRouter.get('/', (request: express.Request, response: express.Response) => {
    response.status(200).json("Routing is done through API Router")
})

apiRouter.get('/test', (request: express.Request, response: express.Response) => {
    response.status(200).json("Testing path through Express JS")
})


export default apiRouter