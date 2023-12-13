import { render, fireEvent } from "@testing-library/react";
import { SpeciesName } from "./speciesName";

describe("Chek the Species Name label and input", () => {
  test("find the label and input tags and their classes, and simulate input change", () => {
    // Arrange
    // let inputValue = "Human";
    const initialSpeciesName = "Human";

    // Act
    render(<SpeciesName initialSpeciesName={initialSpeciesName} />);

    // Act
    const labelElement = document.querySelector("label");
    const labelClass = document.querySelector("label.form__label");
    const inputElement = document.querySelector("input")!;
    const inputClass = document.querySelector("input.form__input");

    fireEvent.change(inputElement, { target: { value: "Dolphin" } });

    // Assert
    expect(labelElement).toBeInTheDocument();
    expect(labelClass).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputClass).toBeInTheDocument();

    expect(labelElement).toHaveTextContent("Species Name:");
    expect(inputElement.value).toBe("Dolphin");
  });
});
