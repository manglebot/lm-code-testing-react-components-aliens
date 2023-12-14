import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PlanetName } from "./planetName";

describe("Chek the Planet Name label and input", () => {
  test("find the label and input tags and their classes", () => {
    // Arrange
    const planetName = "Earth";
    const onChangePlanetName = jest.fn();

    // Act
    const { getByLabelText } = render(
      <PlanetName
        planetName={planetName}
        onChangePlanetName={onChangePlanetName}
      />
    );

    const inputElement = getByLabelText("Planet Name:");

    // Act
    const labelElement = document.querySelector("label");
    const labelClass = document.querySelector("label.form__label");
    const inputClass = document.querySelector("input.form__input");

    userEvent.clear(inputElement);
    userEvent.type(inputElement, "Mars");

    // Assert
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(labelClass).toBeInTheDocument();
    expect(inputClass).toBeInTheDocument();

    expect(labelElement).toHaveTextContent("Planet Name:");
    expect(onChangePlanetName).toHaveBeenCalled();
  });
});
