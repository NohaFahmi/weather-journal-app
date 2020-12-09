// Setup empty JS object to act as endpoint for all routes
projectData = {
    
};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static(__dirname + '/website/'));


// Setup Server
const port = 3000;
app.get('/',(req, res) => {
    res.send('Hello World!');
});

app.get('/add', (req, res) => {

    res.send(projectData);

});

app.post('/add', (req, res) => {
    let dt = req.body;
    projectData['temp'] = dt.name;
    projectData['date'] = dt.name;
    projectData['user-res'] = dt.age;
    console.log(dt);
});

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});

