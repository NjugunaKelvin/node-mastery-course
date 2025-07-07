// INTO TO NODE.JS

const name = 'Vin';

function greet (name) {
    console.log(`hello, ${name}`);
};

greet('Mike')

setTimeout(() => {
    console.log('This happened after 3 seconds.');    
}, 3000);


const myInterval = setInterval(() => {
    console.log('This runs after every second');
    setTimeout(() => {
        clearInterval(myInterval);
    },10000);

}, 1000)

