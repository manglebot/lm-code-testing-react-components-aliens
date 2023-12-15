const validatePlanetName: (planetName: string) => string = (planetName) => {
  const errors: string[] = [];

  if (planetName.length < 2 || planetName.length > 49) {
    errors.push("Planet Name must be between 2 and 49 characters.");
  }

  const pattern = /[^a-zA-Z0-9]/;
  if (pattern.test(planetName)) {
    errors.push("Planet Name can not contain special characters.");
  }

  return errors.join(" ");
};

export default validatePlanetName;
