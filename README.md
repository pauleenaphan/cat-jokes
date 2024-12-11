<img src="https://github.com/user-attachments/assets/660e0c79-23bb-488b-a5c4-151b7a8ed215" alt="CatlaughImage" width="150" height="150"/>

# Cat Jokes
Add some purr-fect fun to your code with random cat jokes! This package generates a variety of cat-themed jokes to lighten up your development experience. <br>

Total Maximum Joke Count = ```82```

# Installation
```bash
npm install cat-jokes
# or
yarn add cat-jokes
```

## Example Usage
```js
const getCatJokes = require("cat-jokes")

let arr = getCatJokes(2); // Generates two jokes

for(let i = 0; i < arr.length; i++){
    console.log(arr[i].joke, arr[i].answer)
}
```

<br>
Jokes are randomly grabbed from catJokes.json

```json
[
    {
        "joke": "Why did the cat sit on the computer?",
        "answer": "Because it wanted to keep an eye on the mouse!"
    },
    {
        "joke": "What’s a cat’s favorite color?",
        "answer": "Purr-ple!"
    }
]
```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.
For major changes, please open an issue first to discuss what you would like to change.

## Changelog
All notable changes to this project will be documented in this file. See the [CHANGELOG](CHANGELOG.md) for details.

## Acknowledgements
This is my very first npm package I have made. Ever since I started using npm I was curious on how to make my own and how hard it was. The Learning the process was fun and it was cool 
to see how everything works. In the future I plan to make a more useful package. Although cat jokes are pretty necessary in anyones code.

## License

This project is licensed under the MIT License 


