// helloWorld function

const helloWorld = function() {
    return "Hello, World!";
};


function sayHello(input){
    return input === undefined || input === "Boolean" ? "Hello, World!" : ("Hello, " + input + "!")
}

function isFive(x) {
    return Boolean (x) || x === 5;
}
function isEven(x) {
    return parseFloat(x) % 2 === 0;
}
function isVowel(x) {
    return "AEIOUaeiou".indexOf(x) !== -1;
}
function add(a,b) {
    return a + b;
}