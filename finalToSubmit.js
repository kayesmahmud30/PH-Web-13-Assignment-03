//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount > 100 ||
    discount < 0
  ) {
    return "Invalid";
  }

  const discountPrice = currentPrice - (currentPrice * discount) / 100;
  return discountPrice.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }

  if (otp.length === 8 && otp.startsWith("ph-")) {
    return true;
  } else {
    return false;
  }
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
  const totalQuestions = omr.right + omr.wrong + omr.skip;

  if (typeof omr !== "object" || totalQuestions !== 100 || Array.isArray(omr)) {
    return "Invalid";
  }
  const totalMarks = Math.round(omr.right - omr.wrong * 0.5);
  return totalMarks;
}

//Problem-04: Upcoming Gono Vote
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

//Problem-05: Text Analyzer for an AI Company
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
