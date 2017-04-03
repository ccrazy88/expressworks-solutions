const express = require("express");

const port = process.argv[2];
const folder = process.argv[3];
const app = express();

app.use(express.static(folder));
app.listen(port);
