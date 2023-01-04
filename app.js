import express from 'express'

const app = express()

// a function that randomly returns a burp or fart noise 
const burpOrFart = () => {
  const burpOrFart = Math.random() > 0.5 ? 'burp' : 'fart'
  return burpOrFart
}

app.get('/', (req, res) => {
  res.send({
    message: burpOrFart()
  })
})

app.get("/burp", (req, res) => {
  res.send({
    message: "burp"
  })
})

app.listen(8080, () => {
  console.log('Server started on port 8080')
})
