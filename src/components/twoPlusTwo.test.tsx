import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TwoPlusTwo } from "./twoPlusTwo";

describe("Check the TwoPlusTwo dropdown", () => {
  test("find the label and dropdown tags, and simulate select change", () => {
    // Arrange
    const twoPlusTwo = "Four";
    // const onChangeTwoPlusTwo = (e: React.ChangeEvent<HTMLSelectElement>) => {};
    const onChangeTwoPlusTwo = jest.fn();
    const validateTwoPlusTwo = (twoPlusTwo: string) => twoPlusTwo;

    // Act
    const { getByLabelText, getByText } = render(
      <TwoPlusTwo
        twoPlusTwo={twoPlusTwo}
        onChangeTwoPlusTwo={onChangeTwoPlusTwo}
        validate={validateTwoPlusTwo}
      />
    );

    // Act
    const selectElement = getByLabelText("What is 2 + 2:");
    const labelElement = getByText("What is 2 + 2:");
    const labelClass = document.querySelector("label.form__label");
    const selectClass = document.querySelector("select.form__select");

    userEvent.selectOptions(selectElement, "Four");
    fireEvent.change(selectElement);
    expect(onChangeTwoPlusTwo).toHaveBeenCalledTimes(1);

    // Assert
    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(labelClass).toBeInTheDocument();
    expect(selectClass).toBeInTheDocument();

    expect(labelElement).toHaveTextContent("What is 2 + 2:");

    expect(onChangeTwoPlusTwo).toHaveBeenCalled();
  });
});
