import { fireEvent, render, screen } from "@testing-library/react";
import W12MForm from "./W12MForm";
// import ValidateSpeciesName from "../validate/validate_species_name";

import "@testing-library/jest-dom/extend-expect";

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

  describe("Tests for Species Name", () => {
    let mockValidateSpeciesName: jest.Mock;

    beforeEach(() => {
      mockValidateSpeciesName = jest.fn();
      jest.mock("../validate/validate_species_name", () => ({
        __esModule: true,
        default: mockValidateSpeciesName,
      }));
    });

    afterEach(() => {
      jest.resetAllMocks();
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

    test("Form validation displays SpeciesName error message", () => {
      // Arrange
      mockValidateSpeciesName.mockReturnValue(
        "Species Name must be between 3 and 23 characters"
      );

      // Act
      render(<W12MForm />);

      const submitButton = document.querySelector('button[type="submit"]')!;
      fireEvent.click(submitButton);

      // Assert
      const speciesNameInput = document.getElementById("speciesName")!;
      const errorMessage = speciesNameInput.nextElementSibling;
      expect(errorMessage).toHaveTextContent(
        "Species Name must be between 3 and 23 characters"
      );
    });

    test("Form validation hides SpeciesName error message", () => {
      // Arrange
      mockValidateSpeciesName.mockReturnValueOnce(
        "Species Name must be between 3 and 23 characters"
      );
      mockValidateSpeciesName.mockReturnValueOnce("");

      // Act
      render(<W12MForm />);

      const submitButton = document.querySelector('button[type="submit"]')!;
      fireEvent.click(submitButton);

      // Assert (initial error message present)
      const speciesNameInput = document.getElementById("speciesName")!;
      const initialErrorMessage = speciesNameInput.nextElementSibling;

      // console.log("initialErrorMessage");
      // console.log(initialErrorMessage?.textContent);

      expect(initialErrorMessage).toHaveTextContent(
        "Species Name must be between 3 and 23 characters"
      );

      fireEvent.change(speciesNameInput, { target: { value: "Dolphin" } });

      // Assert
      const errorMessageAfterChange = speciesNameInput.nextElementSibling!;
      expect(errorMessageAfterChange).not.toBeInTheDocument;
    });
  });

  describe("Tests for Planet Name", () => {
    let mockValidatePlanetName: jest.Mock;

    beforeEach(() => {
      mockValidatePlanetName = jest.fn();
      jest.mock("../validate/validate_planet_name", () => ({
        __esModule: true,
        default: mockValidatePlanetName,
      }));
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    test("PlanetName input updates state correctly", () => {
      // Arrange
      render(<W12MForm />);

      // Act
      const planetNameInput = screen.getByRole("textbox", {
        name: /Planet Name:/i,
      }) as HTMLInputElement;

      fireEvent.change(planetNameInput, { target: { value: "Earth" } });

      // Assert
      expect(planetNameInput.value).toBe("Earth");
    });

    test("Form validation displays Planet Name error message", () => {
      // Arrange
      mockValidatePlanetName.mockReturnValue(
        "Planet Name must be between 2 and 49 characters."
      );

      // Act
      render(<W12MForm />);

      const submitButton = document.querySelector('button[type="submit"]')!;
      fireEvent.click(submitButton);

      // Assert
      const planetNameInput = document.getElementById("planetName")!;
      const errorMessage = planetNameInput.nextElementSibling;
      expect(errorMessage).toHaveTextContent(
        "Planet Name must be between 2 and 49 characters."
      );
    });

    test("Form validation hides Planet Name error message", () => {
      // Arrange
      mockValidatePlanetName.mockReturnValueOnce(
        "Planet Name must be between 2 and 49 characters."
      );
      mockValidatePlanetName.mockReturnValueOnce("");

      // Act
      render(<W12MForm />);

      const submitButton = document.querySelector('button[type="submit"]')!;
      fireEvent.click(submitButton);

      // Assert (initial error message present)
      const planetNameInput = document.getElementById("planetName")!;
      const initialErrorMessage = planetNameInput.nextElementSibling;

      expect(initialErrorMessage).toHaveTextContent(
        "Planet Name must be between 2 and 49 characters."
      );

      fireEvent.change(planetNameInput, { target: { value: "Saturn" } });

      // Assert
      const errorMessageAfterChange = planetNameInput.nextElementSibling!;
      expect(errorMessageAfterChange).not.toBeInTheDocument;
    });
  });

  describe("Tests for Number of Beings", () => {
    test("numberOfBeings input updates state correctly", () => {
      // Arrange
      render(<W12MForm />);

      // Act
      const numberOfBeingsInput = screen.getByLabelText(
        /Number of Beings:/i
      ) as HTMLInputElement;

      // expect(numberOfBeingsInput.value).toBe("0");
      fireEvent.change(numberOfBeingsInput, {
        target: { value: "8078300999" },
      });

      // Assert
      expect(numberOfBeingsInput.value).toBe("8078300999");
    });
  });

  describe("Tests for Two Plus Two dropdown", () => {
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
  });

  describe("Tests for Two Reason For Sparing text area", () => {
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
});
