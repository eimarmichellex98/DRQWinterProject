const express = require('express')
const app = express()
const port = 4000//changed it from 4000 to 3000 so it won't clash with book app
const cors = require('cors')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")//connect to mongoDB

//connect to mongodatabase
const MongoConnection = 'mongodb+srv://admin:admin@cluster0.7jeo0.mongodb.net/books?retryWrites=true&w=majority';
mongoose.connect(MongoConnection, {useNewUrlParser: true});

//schema
const Schema = mongoose.Schema;
var bookSchema = new Schema({
    Book:String,
    Author:String,
    Genre:String
});
var BasicBook = mongoose.model("book", bookSchema);

//cors
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    

app.use(bodyParser.urlencoded({extended: false}))

//parse aplication/json
app.use(bodyParser.json())

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/
//getting data from back end and sending to front
app.get('/api/books', (req, res)=>{
/*
    const libbooks = [
        {
            "Book": "The Perks of being a Wallflower",
            "Author": "Stephen Chbosky",
            "Genre": "Young Adult"
            },
            {
            "Book": "Twilight Saga",
            "Author": "Stephanie Meyer",
            "Genre": "Romance/Fantasy"
            },
            {
            "Book": "The Shining",
            "Author": "Stephen King",
            "Genre": "Horror"
        }
    ];*/
BasicBook.find((err, data)=>{
    res.json(data);
})
})

//delete method
app.delete('/api/books/:id', (req, res)=>{
    console.log("Remove book: " + req.params.id);
    BasicBook.findByIdAndDelete(req.params.id, (err, data)=>{
        res.send(data);
    })
})

//listen for get requests 
app.get('/api/books/:id', (req, res)=>{
    console.log(req.params.id);
    BasicBook.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})

//receiving data from application
app.post('/api/books', (req, res)=>{
    console.log('Book received, thank you!');
    console.log(req.body.Book);
    console.log(req.body.Author);
    console.log(req.body.Genre);

    BasicBook.create({
        Book:req.body.Book,
        Author:req.body.Author,
        Genre:req.body.Genre
    })

    res.send('Book added to library');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})