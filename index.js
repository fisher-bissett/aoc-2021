// get day input
const dayInput = process.argv[2];
// import puzzles
const { puzzleOne, puzzleTwo } = require(`./src/${dayInput}/${dayInput}.js`);

console.log("❄ ❄ ❄ ❄ ❄ Advent of Code ❄ ❄ ❄ ❄ ❄");
console.log(`❄ ❄ ❄ ❄ ❄ ❄ ❄ Day ${dayInput.slice(3)} ❄ ❄ ❄ ❄ ❄ ❄ ❄`);
console.log("Puzzle One: ", puzzleOne());
console.log("Puzzle Two: ", puzzleTwo());
