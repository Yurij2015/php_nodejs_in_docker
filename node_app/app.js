const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Cервер на node.js!'))

app.listen(port, () => console.log(`Прослушивается порт ${port}!`))
