import React, { useState } from "react";
import W12MHeader from "./W12MHeader";
import { SpeciesName } from "./speciesName";
import ValidateSpeciesName from "../validate/validate_species_name";
import { PlanetName } from "./planetName";
import ValidatePlanetName from "../validate/validate_planet_name";
import { NumberOfBeings } from "./numberOfBeings";
import ValidateNumberOfBeings from "../validate/validate_number_of_beings";
import { TwoPlusTwo } from "./twoPlusTwo";
import ValidateTwoPlusTwo from "../validate/validate_two_plus_two";
import { ReasonForSparing } from "./reasonForSparing";
import validateReasonForSparing from "../validate/validate_reason_for_sparing";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numberOfBeings, setNumberOfBeings] = useState("");
  const [twoPlusTwo, setTwoPlusTwo] = useState("Not Four");
  const [reasonForSparing, setReasonForSparing] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("speciesName: " + speciesName);
    console.log("planetName: " + planetName);
    console.log("numberOfBeings: " + numberOfBeings);
    console.log("twoPlusTwo: " + twoPlusTwo);
    console.log("reasonForSparing: " + reasonForSparing);
    // form submission logic here
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <form onSubmit={handleSubmit}>
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={(e) => setSpeciesName(e.target.value)}
          validate={ValidateSpeciesName}
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(e) => setPlanetName(e.target.value)}
          validate={ValidatePlanetName}
        />
        <NumberOfBeings
          numberOfBeings={numberOfBeings}
          onChangeNumberOfBeings={(e) => setNumberOfBeings(e.target.value)}
          validate={ValidateNumberOfBeings}
        />
        <TwoPlusTwo
          twoPlusTwo={twoPlusTwo}
          onChangeTwoPlusTwo={(e) => setTwoPlusTwo(e.target.value)}
          validate={ValidateTwoPlusTwo}
        />
        <ReasonForSparing
          reasonForSparing={reasonForSparing}
          onChangeReasonForSparing={(e) => setReasonForSparing(e.target.value)}
          validate={validateReasonForSparing}
        />
        <button type="submit" aria-label="Submit the form">
          Submit Form
        </button>
      </form>
    </section>
  );
};

export default W12MForm;

// | Label              | Input Type     | Values                        |
// | ------------------ | -------------- | ----------------------------- |
// | Species Name       | text input tag |                               |
// | Planet Name        | text input tag |                               |
// | Number of beings   | text input tag |                               |
// | What is 2 + 2      | select tag     | two option tags: "4", "Not 4" |
// | Reason for sparing | textarea tag   |                               |
