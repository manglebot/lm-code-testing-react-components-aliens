import { render } from "@testing-library/react";
import { TwoPlusTwo } from "./twoPlusTwo";

describe("Chek the Species Name label and input", () => {
  test("find the label and input tags and their classes", () => {
    // Arrange
    const twoPlusTwo = "Human";
    const onChangeTwoPlusTwo = (e: React.ChangeEvent<HTMLSelectElement>) => {};

    // Act
    render(
      <TwoPlusTwo
        twoPlusTwo={twoPlusTwo}
        onChangeTwoPlusTwo={onChangeTwoPlusTwo}
      />
    );

    // Act
    const labelElement = document.querySelector("label");
    const selectElement = document.querySelector("select");
    const labelClass = document.querySelector("label.form__label");
    const selectClass = document.querySelector("select.form__select");

    // Assert
    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(labelClass).toBeInTheDocument();
    expect(selectClass).toBeInTheDocument();

    expect(labelElement).toHaveTextContent("What is 2 + 2:");
  });
});
