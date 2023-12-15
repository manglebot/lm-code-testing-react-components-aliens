const validateNumberOfBeings: (numberOfBeings: string) => string = (
  numberOfBeings
) => {
  const errors: string[] = [];

  if (parseInt(numberOfBeings, 10) < 1000000000) {
    errors.push("Number of Beings must be at least 1,000,000,000 people.");
  }

  const pattern = /[^0-9]/;
  if (pattern.test(numberOfBeings)) {
    errors.push("Number of Beings can only contain numbers.");
  }

  return errors.join(" ");
};

export default validateNumberOfBeings;
