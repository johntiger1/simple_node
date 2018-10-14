
//also recall all the npm and package.json stuff!!
let express = require('express');
let app = express();
let path = require('path');

app.get("/cool", function (request, response) {

    response.send("testing the express");
});


//This is one approach, but what if we want to hide the contents of the javascript call? Well then, you would need to
//put it on the server side. As always, any script files linked to the client are viewable by the client (they are sent wit the index file!)
app.get('/request.js',
    function(req,res){
    res.sendFile(path.join(__dirname + '/request.js'));
});

app.get('/style.css',
    function(req,res){
        res.sendFile(path.join(__dirname + '/style.css'));
    });

//This line should expose the website regularly!
// app.use(express.static('./ETHUofTFrontend/test_site1'));
//AN alternate approach is res.sendFIle()
app.get("/", function (request, response)
{
    // response.send("testing the express");
    response.sendFile(path.join(__dirname + '/index.html'));
    console.log("some new out");

});

//recall making a node server is pretty simple,

//just server.listen etc.
//then use that to serve
//also, we need to require express as well!
//createHTTP etc.
"use strict";




// We can assign everything to a variable ; this is a named function expression!
// and we don't have hoisting on this variable!
var x  = function()
{


}

function myCallBack()
{

    console.log("up and running");
}

let http = require('http');
http.createServer(myCallBack).listen(1337, '127.0.0.1');
console.log("server started");

//ok, so some certain questions:
//can can we invokve node expressions from the JS?
//if not, then should we make the requests straight from the HTML? etc.
//right, it is all about making endpoints available from the node js side, then requesting these or navigating to the endpoints
//via simple html
//i mean once we have the node backing, then we can essentially execute system calls and the like...

app.listen(3000, () => "the variable app, bound to require('express') is serving these requests");



//https://jsonplaceholder.typicode.com/users




