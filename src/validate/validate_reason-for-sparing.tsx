const validateReasonForSparing: (reasonForSparing: string) => string = (
  reasonForSparing
) => {
  let errors: string = "";

  if (reasonForSparing.length < 17 || reasonForSparing.length > 153) {
    errors = "Reason for Sparing must be between 17 and 153 characters.";
  }

  return errors;
};

export default validateReasonForSparing;
