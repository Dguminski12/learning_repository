const subjects = ["Your future", "A mysterious stranger", "The stars", "Your inner child"];
const actions = ["will guide you", "brings good news", "is warning you", "wants to dance"];
const endings = ["today.", "soon.", "if you let go.", "under the full moon."];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateMessage() {
  const subject = getRandomElement(subjects);
  const action = getRandomElement(actions);
  const ending = getRandomElement(endings);
  
  return `${subject} ${action} ${ending}`;
}

console.log(generateMessage());

