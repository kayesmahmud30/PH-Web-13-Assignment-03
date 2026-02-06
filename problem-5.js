// Problem-5 starts here.

function analyzeText(str) {
  if (typeof str !== "string" || !str) {
    return "Invalid";
  }

  const token = str.split(" ").join("").length;
  let longestWord = "";

  for (const word of str.split(" ")) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return { longwords: longestWord, token: token };
}

// const test = analyzeText("");
// console.log(test);
