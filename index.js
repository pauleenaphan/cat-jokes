const fs = require('fs');
const path = require('path');

// Reads jokes from the JSON file and assign all of them to jokes array
const filePath = path.join(__dirname, 'catJokes.json');
const jokes = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Returns an array of cat jokes, amount is based on input 
function getCatJokes(num) {
    const randomJokes = [];
    const jokeCount = jokes.length;
    
    for (let i = 0; i < num; i++) {
        // Math random generates a floating point between 0 - 1 then multiplies it by the number of jokes in the json
        // This makes sure we don't go out of bounds for the joke count 
        const randomIndex = Math.floor(Math.random() * jokeCount);
        randomJokes.push(jokes[randomIndex]);
    }

    return randomJokes;
}

module.exports = getCatJokes;

// Testing
// let arr = getCatJokes(3);
// console.log(arr)



