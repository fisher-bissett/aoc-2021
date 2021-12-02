import { readFileSync } from 'fs';

const directions: string[] = readFileSync(__dirname + '/day2.input.txt')
  .toString()
  .split('\n')
  .map((item) => item);
//
// ----------------------puzzle one----------------------------
//
const puzzleOne = () => {
  let position = 0;
  let depth = 0;
  for (let i = 0; i < directions.length; i++) {
    let currentValue = Number(directions[i].charAt(directions[i].length - 1));
    if (directions[i].includes('down')) depth = depth + currentValue;
    if (directions[i].includes('up')) depth = depth - currentValue;
    if (directions[i].includes('forward')) position = position + currentValue;
  }
  return position * depth;
};
//
// ----------------------puzzle two----------------------------
//
const puzzleTwo = () => {
  let position = 0;
  let depth = 0;
  let aim = 0;
  for (let i = 0; i < directions.length; i++) {
    let currentValue = Number(directions[i].charAt(directions[i].length - 1));
    if (directions[i].includes('down')) aim = aim + currentValue;
    if (directions[i].includes('up')) aim = aim - currentValue;
    if (directions[i].includes('forward')) {
      position = position + currentValue;
      depth = depth + aim * currentValue;
    }
  }
  return position * depth;
};

exports.puzzleOne = puzzleOne;
exports.puzzleTwo = puzzleTwo;
