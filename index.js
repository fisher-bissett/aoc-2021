// get day input from terminal argument
const dayInput = process.argv[2];

// import puzzles one and two for each day using day input argument
const { puzzleOne, puzzleTwo } = require(`./src/${dayInput}/${dayInput}.js`);

// print answers
console.log("❄ ❄ ❄ ❄ ❄ Advent of Code ❄ ❄ ❄ ❄ ❄");
console.log(`❄ ❄ ❄ ❄ ❄ ❄ ❄ Day ${dayInput.slice(3)} ❄ ❄ ❄ ❄ ❄ ❄ ❄`);
console.log("Puzzle One: ", puzzleOne());
console.log("Puzzle Two: ", puzzleTwo());
