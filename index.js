const fs = require('fs');
const path = require('path');

// Reads jokes from the JSON file and assign all of them to jokes array
const filePath = path.join(__dirname, 'catJokes.json');
const jokes = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Returns an array of cat jokes, amount is based on input 
function getCatJokes(num) {
    let randomJokes = [];
    const jokeCount = jokes.length;

    if(num > jokeCount){
        console.log(jokeCount, "is the max number of jokes")
        return [];
    }
    
    const randomIndices = new Set();  // Set allows us to store unique indices 

    // Keep generating random indices until we have the desired num of jokes
    while (randomIndices.size < num) {
        const randomIndex = Math.floor(Math.random() * jokeCount);
        randomIndices.add(randomIndex); // Set ensures uniqueness
    }

    // Convert the Set to an array and use it to get jokes
    const indicesArray = Array.from(randomIndices);

    for (let i = 0; i < num; i++) {
        randomJokes.push(jokes[indicesArray[i]]);
    }

    return randomJokes;
}

module.exports = getCatJokes;

// Testing
// let arr = getCatJokes(100);
// console.log(arr)



