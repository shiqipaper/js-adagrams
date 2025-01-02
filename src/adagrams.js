const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9, 
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

const SCORE_CHART = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
};

export const drawLetters = () => {
  const letterList = [];
  for (const [letter, count] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < count; i++) {
      letterList.push(letter);
    }
  }
  const drawLetters = [];
  for (let i = 0; i < 10; i++) {
    const letterIndex = Math.floor(Math.random() * letterList.length);
    const lastPos = letterList.length - 1;
    [letterList[letterIndex], letterList[lastPos]] = [letterList[lastPos], letterList[letterIndex]];
    drawLetters.push(letterList.pop());
  }
  return drawLetters;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  const letterFrequencyMap = {};
  for (const letter of lettersInHand) {
    if (letterFrequencyMap[letter]) {
      letterFrequencyMap[letter] += 1;
    } else {
      letterFrequencyMap[letter] = 1;
    }
  }

  for (const letter of input.toUpperCase()) {
    if (!letterFrequencyMap[letter] || letterFrequencyMap[letter] === 0) {
      return false; 
    } else {
    letterFrequencyMap[letter] -= 1;
    }
  }
  return true; 
};

export const scoreWord = (word) => {
  let totalScore = 0;
  for (const letter of word.toUpperCase()) {
    totalScore += SCORE_CHART[letter];
  }
  if (word.length >= 7 && word.length <= 10) {
    totalScore += 8;
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let bestWord = "";
  
  for (const word of words) {
    const score = scoreWord(word);
    if (score > highestScore) {
      highestScore = score;
      bestWord = word;
    } else if (score === highestScore && bestWord.length !== 10) {
      if (word.length === 10) {
        bestWord = word;
      } else if (word.length < bestWord.length) {
        bestWord = word;
      }
    }
  }
  return { word: bestWord, score: highestScore };
};
