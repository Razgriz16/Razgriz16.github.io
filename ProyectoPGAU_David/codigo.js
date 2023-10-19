console.log("curso de node");

/*prueba post
let sql = "SELECT * FROM postulacion"
pool.execute(sql, function(err, result){
    if (err) throw err;

    result.forEach(res => {
        console.log(res.rut_estudiante);
    })
    
});
*/

/*
An async function is used to handle asynchronous operations in JavaScript. 
Asynchronous operations are operations that can be executed without blocking the 
main thread of execution. This is particularly useful when dealing with tasks such as 
fetching data from a server, reading files, or performing time-consuming calculations.

The primary difference between an async function and a normal function is the way they 
handle promises. A normal function will return a promise when it encounters an async 
operation, whereas an async function will automatically wait for the promise to resolve
or reject before continuing with the rest of the function.

Here's an example to illustrate the difference:
*/

​
// Normal function
function normalFunction() {
 return fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));
}
​
// Async function
async function asyncFunction() {
 const response = await fetch('https://api.example.com/data');
 const data = await response.json();
 console.log(data);
}
​

/*
In the `normalFunction`, we have to use `.then()` to handle the promise returned by 
`fetch`. On the other hand, in the `asyncFunction`, we can use the `await` keyword to 
wait for the promise to resolve before continuing with the rest of the function. This 
makes the code in the `asyncFunction` easier to read and understand.

It's important to note that async functions always return a promise, regardless of 
whether they contain an await expression or not. This means that you can use `.then()` 
and `.catch()` to handle the result of an async function just like you would with a 
normal function.

In summary, async functions are used to handle asynchronous operations in JavaScript 
and provide a more readable and concise way to work with promises. They are particularly
 useful when dealing with tasks that involve fetching data from a server or performing 
 time-consuming calculations.
*/