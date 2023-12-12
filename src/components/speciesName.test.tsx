import { render } from "@testing-library/react";
import { SpeciesName } from "./speciesName";

describe("Chek the Species Name label and input", () => {
  test("find the label and input tags and their classes", () => {
    // Arrange
    const speciesName = "Human";
    const onChangeSpeciesName = (e: React.ChangeEvent<HTMLInputElement>) => {};

    // Act
    render(
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={onChangeSpeciesName}
      />
    );

    // Act
    const labelElement = document.querySelector("label");
    const inputElement = document.querySelector("input");
    const labelClass = document.querySelector("label.form__label");
    const inputClass = document.querySelector("input.form__input");

    // Assert
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(labelClass).toBeInTheDocument();
    expect(inputClass).toBeInTheDocument();

    expect(labelElement).toHaveTextContent("Species Name:");
  });
});

// other test ideas -
// toHaveFocus()
