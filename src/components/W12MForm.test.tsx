import {
  fireEvent,
  getByLabelText,
  getByTestId,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import W12MForm from "./W12MForm";

// import { validateSpeciesName } from "../validate/validateSpeciesName";

// import userEvent from "@testing-library/user-event";

describe("W12M Form render and submit tests", () => {
  test("renders form element", () => {
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

  test("SpeciesName input updates state correctly", () => {
    // Arrange
    render(<W12MForm />);

    // Act
    const speciesNameInput = screen.getByRole("textbox", {
      name: /species name:/i,
    }) as HTMLInputElement;

    fireEvent.change(speciesNameInput, { target: { value: "Human" } });

    // Assert
    expect(speciesNameInput).toHaveValue("Human");
  });

  test("PlanetName input updates state correctly", () => {
    // Arrange
    render(<W12MForm />);

    // Act
    const planetNameInput = screen.getByRole("textbox", {
      name: /Planet Name:/i,
    }) as HTMLInputElement;

    // expect(planetNameInput.value).toBe("");
    fireEvent.change(planetNameInput, { target: { value: "Earth" } });

    // Assert
    expect(planetNameInput.value).toBe("Earth");
  });

  test("numberOfBeings input updates state correctly", () => {
    // Arrange
    render(<W12MForm />);

    // Act
    const numberOfBeingsInput = screen.getByLabelText(
      /Number of Beings:/i
    ) as HTMLInputElement;

    // expect(numberOfBeingsInput.value).toBe("0");
    fireEvent.change(numberOfBeingsInput, { target: { value: "8078300999" } });

    // Assert
    expect(numberOfBeingsInput.value).toBe("8078300999");
  });
  test("TwoPlusTwo component updates on selection", () => {
    // Arrange
    render(<W12MForm />);

    // Act
    const selectElement = screen.getByLabelText(
      "What is 2 + 2:"
    ) as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: "Four" } });

    // Assert
    expect(selectElement.value).toBe("Four");
  });

  test("ReasonForSparing input works", () => {
    // Arrange
    render(<W12MForm />);

    // Act
    const reasonForSparingInput = screen.getByRole("textbox", {
      name: /Reason For Sparing\?/i,
    }) as HTMLTextAreaElement;

    // expect(reasonForSparingInput.value).toBe("");
    fireEvent.change(reasonForSparingInput, {
      target: { value: "We have the best tea in the universe" },
    });

    // Assert
    expect(reasonForSparingInput.value).toBe(
      "We have the best tea in the universe"
    );
  });
});
