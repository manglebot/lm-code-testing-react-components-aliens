import React, { useState } from "react";
import W12MHeader from "./W12MHeader";
import { SpeciesName } from "./speciesName";
import { PlanetName } from "./planetName";
import { NumberOfBeings } from "./numberOfBeings";
import { TwoPlusTwo } from "./twoPlusTwo";
import { ReasonForSparing } from "./reasonForSparing";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numberOfBeings, setNumberOfBeings] = useState(0); //8078300999
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
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(e) => setPlanetName(e.target.value)}
        />
        <NumberOfBeings
          numberOfBeings={numberOfBeings}
          onChangeNumberOfBeings={(e) =>
            setNumberOfBeings(parseInt(e.target.value, 10))
          }
        />
        <TwoPlusTwo
          twoPlusTwo={twoPlusTwo}
          onChangeTwoPlusTwo={(e) => setTwoPlusTwo(e.target.value)}
        />
        <ReasonForSparing
          reasonForSparing={reasonForSparing}
          onChangeReasonForSparing={(e) => setReasonForSparing(e.target.value)}
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
