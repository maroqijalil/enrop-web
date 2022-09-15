const fishBash = (number) => {
  if (number % 3 === 0) {
    console.log("fish")
  } else if (number % 5 === 0) {
    console.log("bash")
  } else if (number % 15 === 0) {
    console.log("fish bash")
  }
};

fishBash(9);
fishBash(20);
fishBash(15);
fishBash(11);
