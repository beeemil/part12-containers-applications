const express = require('express')
const jsonServer = require('json-server')
const cors = require('cors')
const app = express()
app.use(cors())

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use('/api',jsonServer.router('db.json'))

app.get('/version', (_req, res) => {
  res.send('11')
})

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
