const express = require('express');
const path = require('path');
const port = 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/contact.html'));
});

app.post('/form', (req, res)=>{
    res.send(`Welcome to your user page !`);
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});