const express = require('express')
const app = express()
const port = 3000

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(port, () => console.log(`127.0.0.1:3000`))