function findMissing(numbersArray) {
  for (let i = 0; i < numbersArray.length; i += 1) {
    const currentElement = numbersArray[i];
    const nextElement = numbersArray[i + 1];

    const correctNextElement = currentElement + 1;

    if (i === 0 && currentElement !== 1) {
      return 1;
    }

    if (nextElement !== correctNextElement) {
      return correctNextElement;
    }
  }
}

module.exports = findMissing;
