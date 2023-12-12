import { render } from "@testing-library/react";
import { NumberOfBeings } from "./numberOfBeings";

describe("Chek the Number Of Beings label and input", () => {
  test("find the label and input tags and their classes", () => {
    // Arrange
    const numberOfBeings = 8078300999;
    const onChangeNumberOfBeings = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {};

    // Act
    render(
      <NumberOfBeings
        numberOfBeings={numberOfBeings}
        onChangeNumberOfBeings={onChangeNumberOfBeings}
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

    expect(labelElement).toHaveTextContent("Number of Beings:");
  });
});
