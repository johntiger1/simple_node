
//it really is incredible, the browser just knows ES6 vs ES5!!
//however, this is the topic of TRANSPILATION: we need to turn our new fangled es6 into es5
//ooh, fetch is another thing we can use!!
//also look into "mixing es6 and es5"

function hello ()
{
    console.log("hello");
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url).
    then(data => data.json()). //transform to json first
        then(json =>


        console.log(JSON.stringify(json))

    );  //essentially, we are specifying a pipeline, or string of transforms to occur



//    why is the syntax so janky? since AJAX is an async request, even XMLHTTPrequest was not super nice to play with
//    in web, theres multiple ways of getting at something: either via a new page, or via an ajax non-reloading request
//    jqueyr is essentially the standard library of JS!!


}

function issueHTTPRequest()
{
    console.log("placeholder");

}