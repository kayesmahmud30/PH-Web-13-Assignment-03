// Problem-4 starts here.

function gonoVote(array) {
  if (!Array.isArray(array)) {
    return "Invalid";
  }

  let haCounter = 0;
  let naCounter = 0;

  for (const vote of array) {
    if (vote === "ha") {
      haCounter++;
    } else {
      naCounter++;
    }
  }

  if (haCounter > naCounter) {
    return true;
  } else if (haCounter < naCounter) {
    return false;
  } else {
    return "equal";
  }
}

// const test = gonoVote(["ha", "na", "ha", "na"]);
// console.log(test);
