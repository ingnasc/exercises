// Function Hello World
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
    return function createHelloWorld() {
        return 'Hello World';
    }
}