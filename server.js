const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

const viewOption = {
  root: path.join(__dirname, 'views')
}
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index.html',viewOption)
})



app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))