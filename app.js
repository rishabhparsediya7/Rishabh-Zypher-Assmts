const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const axios = require("axios");


const staticPath = path.join(__dirname, "../Rishabh Zypher Assmts/assets");
const templatePath = path.join(__dirname, "../Rishabh Zypher Assmts/views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);

let arr;

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
    // var fs = require('fs');

axios.get('https://run.mocky.io/v3/c2eee2b4-1cbb-43d4-a5a0-48e5339a9541')
    .then((response) => {
        arr = response.data.clients;
        console.log(arr);
    })
    .catch((err) => {
        if (err)
            throw err;
    });
app.get('/', (req, res) => {
    res.render("index", { client: arr });
})