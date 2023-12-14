import {
  fireEvent,
  getByLabelText,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import { ReasonForSparing } from "./reasonForSparing";
import userEvent from "@testing-library/user-event";
import { debug } from "console";

describe("Chek the Reason for Saving label and input", () => {
  test("find the label and input tags and their classes", () => {
    // Arrange
    const reasonForSparing = "We have nice smiles";
    const onChangeReasonForSparing = jest.fn();

    // Act
    const { getByLabelText } = render(
      <ReasonForSparing
        reasonForSparing={reasonForSparing}
        onChangeReasonForSparing={onChangeReasonForSparing}
      />
    );

    // Act
    const labelElement = document.querySelector("label");
    // const textareaElement = document.querySelector("textarea")!;

    const textareaElement = screen.getByRole("textbox", {
      name: /reason for sparing\?/i,
    });

    const labelClass = document.querySelector("label.form__label");
    const textareaClass = document.querySelector("textarea.form__textarea");

    userEvent.clear(textareaElement);
    // userEvent.type(textareaElement, "We have the best tea in the universe");
    fireEvent.change(textareaElement, {
      target: { value: "We have the best tea in the universe" },
    });
    debug();

    // Assert
    expect(labelElement).toBeInTheDocument();
    expect(textareaElement).toBeInTheDocument();
    expect(labelClass).toBeInTheDocument();
    expect(textareaClass).toBeInTheDocument();

    expect(labelElement).toHaveTextContent("Reason For Sparing?");
    // expect(textareaElement).toHaveTextContent("Reason For Sparing?");

    expect(onChangeReasonForSparing).toHaveBeenCalled();
    // expect(onChangeReasonForSparing).toHaveBeenCalledTimes(1);
    // expect(onChangeReasonForSparing).toHaveBeenCalledWith(
    //   expect.objectContaining({
    //     target: { value: "We have the best tea in the universe" },
    //   })
    // );
  });
});
