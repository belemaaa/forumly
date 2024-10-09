import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'


const app = express()

app.use(cors({
    credentials: true
}))
app.use(compression())
app.use(bodyParser.json())


export default app