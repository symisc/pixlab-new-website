const wordHiglight = document.querySelector(".word-highlight");
const dynamicText = wordHiglight.querySelector(".typing-effect");
const words = JSON.parse(wordHiglight.dataset.type);

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  if (!words.length) return;

  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  wordHiglight.querySelector(".cursor").classList.remove("blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // If word is deleted then switch to the next word
    isDeleting = !isDeleting;
    wordHiglight.querySelector(".cursor").classList.add("blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();
