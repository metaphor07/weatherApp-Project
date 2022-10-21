const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 2000;


// Public Static path
const staticPath = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', templatesPath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

// routing
app.get("/", (req, res)=>{
    res.send("Wellcome to Metaphor's World");
})

app.get("/about", (req, res)=>{
    res.render('about.hbs');
    // res.send(about.html);
})

app.get("/weather", (req, res)=>{
    res.render('weather.hbs');
})

app.get("*", (req, res) =>{
    res.render('404error.hbs', {
        errorMsg: "Oops! Error page Occures",
    });
})

app.listen(port, ()=>{
    console.log(`listing the port ${port}`);
});