const express = require('express')
const app = express()
//Change port from local 3000 to 4000 cause the react app is running on 3000
const port = 4000
const cors = require('cors');
//Body-parse Import
const bodyParser = require("body-parser");

//Added to avoid a cors error
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Parse the body 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Getting the information on the api
app.get('/api/movies', (req, res) => {
    const mymovies = [

        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    res.status(200).json({
        message: "Everything is Ok",
        movies: mymovies
    });
})

//Post
//Request to pull title,year and poster out from the body
app.post('/api/movies', (req, res) => {
    console.log('Movie Recieved!');
    console.log('req.body.title');
    console.log('req.body.year');
    console.log('req.body.poster');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})