import { render } from "@testing-library/react";
import { ReasonForSparing } from "./reasonForSparing";

describe("Chek the Species Name label and input", () => {
  test("find the label and input tags and their classes", () => {
    // Arrange
    const reasonForSparing = "Human";
    const onChangeReasonForSparing = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {};

    // Act
    render(
      <ReasonForSparing
        reasonForSparing={reasonForSparing}
        onChangeReasonForSparing={onChangeReasonForSparing}
      />
    );

    // Act
    const labelElement = document.querySelector("label");
    const textareaElement = document.querySelector("textarea");
    const labelClass = document.querySelector("label.form__label");
    const textareaClass = document.querySelector("textarea.form__textarea");

    // Assert
    expect(labelElement).toBeInTheDocument();
    expect(textareaElement).toBeInTheDocument();
    expect(labelClass).toBeInTheDocument();
    expect(textareaClass).toBeInTheDocument();

    expect(labelElement).toHaveTextContent("Reason For Sparing?");
  });
});
