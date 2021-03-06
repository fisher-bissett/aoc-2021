import { readFileSync } from 'fs';

const seaLevels: number[] = readFileSync(__dirname + '/day1.input.txt')
  .toString()
  .split('\n')
  .map((item) => Number(item));
//
// ----------------------puzzle one----------------------------
//
const puzzleOne = (): number => {
  let count: number = 0;
  for (let i = 1; i < seaLevels.length; i++) {
    if (seaLevels[i] > seaLevels[i - 1]) {
      count++;
    }
  }
  // console.log(count);
  return count;
};
//
// ----------------------puzzle two----------------------------
//
const puzzleTwo = (): number => {
  let count: number = 0;
  const groupedArray = createGroupings(seaLevels);
  for (let i = 1; i < groupedArray.length; i++) {
    if (groupedArray[i] > groupedArray[i - 1]) {
      count++;
    }
  }
  // console.log(count);
  return count;
};

const createGroupings = (array: number[]): number[] => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i] + array[i + 1] + array[i + 2];
    newArray.push(value);
  }
  return newArray;
};

exports.puzzleOne = puzzleOne;
exports.puzzleTwo = puzzleTwo;
