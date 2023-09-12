import express from 'express'

const userRouter: express.Router = express.Router()

userRouter.get('/', (request: express.Request, response: express.Response) => {
    response.status(200).json("GET request made using userRouter...")
})

//posting form data
userRouter.post('/login', (request: express.Request, response: express.Response) => {
    let formData = request.body
    response.status(200).json({
        message: "formData recieved!!",
        formData: formData
    })
})

export default userRouter