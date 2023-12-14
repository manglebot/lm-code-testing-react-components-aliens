import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SpeciesName } from "./speciesName";

describe("Chek the Species Name label and input", () => {
  test("find the label and input tags and their classes, and simulate input change", () => {
    // Arrange
    const speciesName = "Human";
    const onChangeSpeciesName = jest.fn();

    // Act
    const { getByLabelText } = render(
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={onChangeSpeciesName}
      />
    );

    const inputElement = getByLabelText("Species Name:");

    // Act
    const labelElement = document.querySelector("label");
    // const inputElement = document.querySelector("input")!;
    const labelClass = document.querySelector("label.form__label");
    const inputClass = document.querySelector("input.form__input");

    userEvent.clear(inputElement);
    userEvent.type(inputElement, "Dolphin");

    // Assert
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(labelClass).toBeInTheDocument();
    expect(inputClass).toBeInTheDocument();

    expect(labelElement).toHaveTextContent("Species Name:");
    expect(onChangeSpeciesName).toHaveBeenCalled();
  });
});
