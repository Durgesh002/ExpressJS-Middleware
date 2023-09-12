import express from 'express'
import userRouter from './router/userRouter'
import apiRouter from './router/apiRouter'
import applogger from './middlewares/applogger'

const app: express.Application = express()
const hostname: string = 'localhost'
const port: number = 5000

//coniguring Express to recieve form data
app.use(express.json())

//configure middleware
app.use(applogger)

app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200).json("Welcome to Express JS...")
})

//Router
app.use('/user', userRouter)
app.use('/api', apiRouter)

app.listen(port, hostname, () => {
    console.log("Express JS server is running...")
})