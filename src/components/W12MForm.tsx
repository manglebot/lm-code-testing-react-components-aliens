import React, { useState } from "react";
import W12MHeader from "./W12MHeader";
import { SpeciesName } from "./speciesName";
import { PlanetName } from "./planetName";
import { NumberOfBeings } from "./numberOfBeings";
import { TwoPlusTwo } from "./TwoPlusTwo";
import { ReasonForSparing } from "./reasonForSparing";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("humans");
  const [planetName, setPlanetName] = useState("Earth");
  const [numberOfBeings, setNumberOfBeings] = useState(8078300999);
  const [twoPlusTwo, setTwoPlusTwo] = useState("");
  const [reasonForSparing, setReasonForSparing] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("the submit was pressed");
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
        <button type="submit">Submit Form</button>
        {/* Reason for sparing */}
        {/* REST OF FORM GOES HERE */}
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
