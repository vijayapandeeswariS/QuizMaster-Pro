var express=require("express")

app=express()

const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/login')

var db= mongoose.connection;

db.on('error' , function()
{
    console.log("error")
})

db.on('open' , function(){
    console.log("success")
})

var bodyparser=require("body-parser")

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({}))

app.post("/data" , function(req,res){
    var data={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password
    }

    db.collection('userdetails').insertOne(data,function(req,res)
{

})

res.sendFile(__dirname + "/index.html")
    
})

app.get("/", function(req,res)
{
    res.sendFile(__dirname+ "/login.html")
})

app.use(express.static('public'));

app.get("/index", function(req,res)
{
    res.sendFile(__dirname+ "/index.html")
})

app.use(express.static('public'));

app.get("/html", function(req,res)
{
    res.sendFile(__dirname+ "/html.html")
})

app.use(express.static('public'));

app.get("/css", function(req,res)
{
    res.sendFile(__dirname+ "/css.html")
})

app.use(express.static('public'));

app.get("/script", function(req,res)
{
    res.sendFile(__dirname+ "/script.html")
})

app.use(express.static('public'));


app.listen(4262)

