const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", require('./src/routes'));

app.listen(3001, () => {
    console.log("API de músicas iniciada na porta 3001");
});