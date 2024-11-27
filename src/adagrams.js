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
export const drawLetters = () => {
  const letterList = [];
  for (const letter in LETTER_POOL) {
    const count = LETTER_POOL[letter];
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
  const letterFrequency = {};
  for (const letter of lettersInHand) {
    if (letterFrequency[letter]) {
      letterFrequency[letter] += 1;
    } else {
      letterFrequency[letter] = 1;
    }
  }

  for (const letter of input.toUpperCase()) {
    if (!letterFrequency[letter] || letterFrequency[letter] === 0) {
      return false; 
    } else {
    letterFrequency[letter] -= 1;
    }
  }
  return true; 
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
