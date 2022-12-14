const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;
const path = require('path');

// static 
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_Path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_Path);



app.use(express.static(static_path));


// render 

app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render('weather');
})

app.get("*",(req,res)=>{
    res.render('404error');
})


app.listen(port, ()=>{
    console.log(`This is the Server No. ${port}`);
})