import { readFileSync } from 'fs';

const report: string[] = readFileSync(__dirname + '/day3.input.txt')
  .toString()
  .split('\n')
  .filter((x) => x)
  .map((item) => item);

//
// ----------------------puzzle one----------------------------
//

const puzzleOne = () => {
  let gammaRate = '';
  let epsilonRate = '';
  const majorityCount = report.length / 2;

  for (let i = 0; i < report[0].length; i++) {
    let onesCount = 0;
    for (let column of report) {
      if (column[i] === '1') {
        onesCount++;
      }
    }
    if (onesCount > majorityCount) {
      gammaRate += '1';
      epsilonRate += '0';
    } else {
      gammaRate += '0';
      epsilonRate += '1';
    }
  }
  const gammaDecimal = parseInt(gammaRate, 2);
  const epsilonDecimal = parseInt(epsilonRate, 2);
  return gammaDecimal * epsilonDecimal;
};

//
// ----------------------puzzle two----------------------------
//

const puzzleTwo = () => {
  // o2 generator rating
  const o2Rating = parseInt(getRating(report, 0, true)[0], 2);

  // cO2 scrubber rating
  const co2Rating = parseInt(getRating(report, 0, false)[0], 2);
  return o2Rating * co2Rating;
};

const getRating = (arr: string[], idx: number, isO2: boolean): string[] => {
  let filtered = [];
  let onesCount = 0;
  for (let column of arr) {
    if (column[idx] === '1') {
      onesCount++;
    }
  }
  if (onesCount >= arr.length / 2) {
    filtered = arr.filter((item) => item[idx] === (isO2 ? '1' : '0'));
  } else {
    filtered = arr.filter((item) => item[idx] === (isO2 ? '0' : '1'));
  }

  return filtered.length > 1 ? getRating(filtered, idx + 1, isO2) : filtered;
};

exports.puzzleOne = puzzleOne;
exports.puzzleTwo = puzzleTwo;
