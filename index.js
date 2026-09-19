
const express = require('express');
const app = express()
const port = 3000

app.use(express.json())

app.use((req, res, next) => {
    console.log('${req.method} ${req.url} - ${new Date()}')
    next()
})

app.get('/user/:id', (req, res) => {
  const id = req.params.id
  console.log("User " + id + " profile")
  res.send("User " + id + " profile")
})


app.post('/user', (req, res) => {
  res.json({ echoed: req.body })
})



app.get('/', (req, res) => {
  res.send('My Week 2 API!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

