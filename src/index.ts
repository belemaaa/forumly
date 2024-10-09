import { Server } from 'http'
import http from 'http'
import app from './app'

const server = http.createServer(app)
const port = 8000
const hostname = 'http://localhost'

server.listen(port, () => {
    console.log(`server is running on ${hostname}:${port}/`)
})