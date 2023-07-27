let express = require('express');
let app = express();
const port = 5001;

app.use(express.json());

const quoteList = require('./quoteList.js');
app.use(express.static('server/public'));

//Sets path and data to send back to client
app.get('/quotes', function(req, res) {
    console.log('Request for /quotes was made');
    res.send(quoteList);
});

app.post('/quotes', (req, res) => {
    console.log('get a POST request', req.body);

    let quote = req.body;
    quoteList.push(quote);
    res.sendStatus(201);
});

app.delete('/quotes/:index', (req, res) => {
    console.log('Delete request!', req.body);
    console.log(req.params);//index #

    let index = req.params.index;
    //delete quoteList[index]; leaves null value in its place - do not use to send to database
    quoteList.splice(index, index);
    res.sendStatus(201);
});




app.listen(port, function() {
    console.log('listening on port', port)
});

//4 types of routes:
//get
//post
//put
//delete
//CRUD - Create Read Update Delete

//status codes:
//server request always includes status codes
// 200 - Okay - everything worked as expected
// 201 - Created - record was created without issue
// 400 - Bad Request - something went wrong in your route
// 404 - Not found
// 500 - Server Error - something bad happened on the server
