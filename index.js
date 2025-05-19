// Variables :
const express = require('express');
const path = require('path');
const port = 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({extended:true}));

// Method get :
app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/contact.html'));
});

// Method post :
app.post('/form', (req, res)=>{
    const {email, password} = req.body;
    if(password !== 'JavaScript'){
        res.send('-- Access denied --');
    }else{
        res.sendFile(path.join(__dirname, 'views/profile.html'));
    }
});

// 404 page :
app.use((req, res)=>{
    res.sendFile(path.join(__dirname, 'views/404.html'));
});

// Launch the server :
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});