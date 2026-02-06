// Problem-2 starts here.

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

// const test = validOtp("ph-10985");
// console.log(test);
