const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')

let app = express();

app.use((req, res, next) => {
    fs.appendFileSync('log.txt',`${req.url}\n`);
    next();
})

// app.get('/', (req, res, next) => {
//     res.send('Hello from the web server side...')
//     next()
// })

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.name) ;
    res.send(`Thank you, ${req.body.name}, your contact form has been submitted...this message will explode in 5 seconds`)
})

app.use(express.static(path.join(__dirname, '../public')))



app.listen(3000);