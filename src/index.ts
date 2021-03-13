import express from 'express'
// require('dotenv').config()
import cors from 'cors'

import service from './services/UserService'

console.log(service.find())

const app = express()
app.use(cors())
const port = process.env.PORT_API || 4000

// console.log(service.find())

app.listen(port, () => {
  console.log(`Your server is running on port ${port}`)
})

