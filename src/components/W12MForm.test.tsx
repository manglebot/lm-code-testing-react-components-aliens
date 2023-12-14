import {
  fireEvent,
  getByLabelText,
  getByTestId,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import W12MForm from "./W12MForm";
import userEvent from "@testing-library/user-event";

import { act } from "react-dom/test-utils";

describe("W12M Form render and submit tests", () => {
  test("renders form element", () => {
    // we can hold onto the object returned from render()
    // this object has a container property that we can destructure and inspect

    // Arrange
    const { container } = render(<W12MForm />);

    // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
    // for example, the firstChild of our container should be our form element

    // Act & Assert
    expect(container.querySelector("form")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("w12MForm");
  });

  test("Submit button works", () => {
    // Arrange
    const { container } = render(<W12MForm />);

    // Act
    const formElement = container.querySelector("form")!;
    fireEvent.submit(formElement);

    // Assert
    expect(formElement).toHaveBeenCalled;
  });

  test("SpeciesName input works", () => {
    // Arrange
    render(<W12MForm />);

    // Act
    const speciesNameInput = screen.getByRole("textbox", {
      name: /species name:/i,
    }) as HTMLInputElement;

    // Assert initial value is empty
    expect(speciesNameInput.value).toBe("");

    // Simulate user input
    // userEvent.type(speciesNameInput, "Alien");
    fireEvent.change(speciesNameInput, { target: { value: "Alien" } });

    // Assert
    expect(speciesNameInput.value).toBe("Alien");
  });

  test("SpeciesName input updates state correctly", () => {
    // Arrange
    render(<W12MForm />);

    // Act
    const speciesNameInput = screen.getByRole("textbox", {
      name: /species name:/i,
    }) as HTMLInputElement;

    // Simulate user input
    // userEvent.clear(speciesNameInput);
    // userEvent.type(speciesNameInput, "Alien");
    fireEvent.change(speciesNameInput, { target: { value: "Alien" } });

    // Assert state is updated correctly
    act(() => {
      // expect(speciesNameInput.value).toBe("Alien"); // This checks the DOM value
      expect(speciesNameInput).toHaveValue("Alien"); // This checks the input's state
    });
  });
});
