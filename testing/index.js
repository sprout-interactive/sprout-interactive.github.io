const express = require('express')
const app = express()

app.use(express.static("smmart"));

app.listen(3000, "0.0.0.0")