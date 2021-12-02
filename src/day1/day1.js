const fs = require("fs");

function getInputFile() {
  return fs
    .readFileSync(__dirname + "/day1.input.txt")
    .toString()
    .split("\n")
    .map((item) => Number(item));
}
//
// ----------------------puzzle one----------------------------
//
function puzzleOne() {
  const seaLevels = getInputFile();
  let count = 0;

  for (let i = 1; i < seaLevels.length; i++) {
    if (seaLevels[i] > seaLevels[i - 1]) {
      count++;
    }
  }
  // console.log(count);
  return count;
}
//
// ----------------------puzzle two----------------------------
//
function puzzleTwo() {
  const seaLevels = getInputFile();
  let count = 0;
  const groupedArray = createGroupings(seaLevels);
  for (let i = 1; i < groupedArray.length; i++) {
    if (groupedArray[i] > groupedArray[i - 1]) {
      count++;
    }
  }
  // console.log(count);
  return count;
}

function createGroupings(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i] + array[i + 1] + array[i + 2];
    newArray.push(value);
  }
  return newArray;
}

module.exports.puzzleOne = puzzleOne;
module.exports.puzzleTwo = puzzleTwo;
