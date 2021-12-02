const fs = require("fs");

function getInputFile() {
  return fs
    .readFileSync(__dirname + "/day[].input.txt")
    .toString()
    .split("\n")
    .map((item) => Number(item));
}
//
// ----------------------puzzle one----------------------------
//
function puzzleOne() {}
//
// ----------------------puzzle two----------------------------
//
function puzzleTwo() {}

module.exports.puzzleOne = puzzleOne;
module.exports.puzzleTwo = puzzleTwo;
