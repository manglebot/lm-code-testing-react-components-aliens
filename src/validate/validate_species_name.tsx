const validateSpeciesName: (speciesName: string) => string = (speciesName) => {
  const errors: string[] = [];

  if (speciesName.length < 3 || speciesName.length > 23) {
    errors.push("Species Name must be between 3 and 23 characters.");
  }

  const pattern = /^[a-zA-Z\s]+$/;
  if (!pattern.test(speciesName)) {
    errors.push("Species Name should contain only letters and spaces.");
  }

  return errors.join(" ");
};

export default validateSpeciesName;
