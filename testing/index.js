const express = require('express')
const app = express()

app.use("/smmart", express.static("smmart"));

app.listen(3000, "0.0.0.0")