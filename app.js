const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'));
});

app.post('/', (req, res) => {
    return res.send(req.body);
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'));
});

app.post('/', (req, res) => {
    return res.send(req.body);
})

app.listen(3000, () => {
    console.log('Servidor funcionando');
});