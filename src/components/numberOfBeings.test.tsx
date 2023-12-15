import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NumberOfBeings } from "./numberOfBeings";

describe("Chek the Number Of Beings label and input", () => {
  test("find the label and input tags and their classes", () => {
    // Arrange
    const numberOfBeings = "8078300999";
    const onChangeNumberOfBeings = jest.fn();
    const validateNumberOfBeings = (numberOfBeings: string) => numberOfBeings;

    // Act
    render(
      <NumberOfBeings
        numberOfBeings={numberOfBeings}
        onChangeNumberOfBeings={onChangeNumberOfBeings}
        validate={validateNumberOfBeings}
      />
    );

    // Act
    const labelElement = document.querySelector("label");
    const inputElement = document.querySelector("input")!;
    const labelClass = document.querySelector("label.form__label");
    const inputClass = document.querySelector("input.form__input");

    userEvent.clear(inputElement);
    userEvent.type(inputElement, "123123");

    // Assert
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(labelClass).toBeInTheDocument();
    expect(inputClass).toBeInTheDocument();

    expect(labelElement).toHaveTextContent("Number of Beings:");
    expect(onChangeNumberOfBeings).toHaveBeenCalled();
  });
});
