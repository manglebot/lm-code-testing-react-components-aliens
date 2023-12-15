const validateTwoPlusTwo: (twoPlusTwo: string) => string = (twoPlusTwo) => {
  let errors: string = "";

  if (twoPlusTwo == "Not Four") {
    errors = "2 + 2 must equal 4.";
  }

  return errors;
};

export default validateTwoPlusTwo;
