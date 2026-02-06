// Problem-3 starts here.

function finalScore(omr) {
  const totalQuestions = omr.right + omr.wrong + omr.skip;

  if (typeof omr !== "object" || totalQuestions !== 100 || Array.isArray(omr)) {
    return "Invalid";
  }
  const totalMarks = Math.round(omr.right - omr.wrong * 0.5);
  return totalMarks;
}

// const test = finalScore({ right: 67, wrong: 23, skip: 10 });
// console.log(test);
