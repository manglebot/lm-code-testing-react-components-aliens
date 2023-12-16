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
    let mockNumberOfBeings: jest.Mock;

    beforeEach(() => {
      mockNumberOfBeings = jest.fn();
      jest.mock("../validate/validate_number_of_beings", () => ({
        __esModule: true,
        default: mockNumberOfBeings,
      }));
    });

    afterEach(() => {
      jest.resetAllMocks();
    });
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

    // ////////////////
    test("Form validation displays Number of Beings error message", () => {
      // Arrange
      mockNumberOfBeings.mockReturnValue(
        "Number of Beings must be at least 1,000,000,000 people."
      );

      // Act
      render(<W12MForm />);

      const submitButton = document.querySelector('button[type="submit"]')!;
      fireEvent.click(submitButton);

      // Assert
      const numberOfBeings = document.getElementById("numberOfBeings")!;
      const errorMessage = numberOfBeings.nextElementSibling;
      expect(errorMessage).toHaveTextContent(
        "Number of Beings must be at least 1,000,000,000 people."
      );
    });

    test("Form validation hides Number of Beings error message", () => {
      // Arrange
      mockNumberOfBeings.mockReturnValueOnce(
        "Number of Beings must be at least 1,000,000,000 people."
      );
      mockNumberOfBeings.mockReturnValueOnce("");

      // Act
      render(<W12MForm />);

      const submitButton = document.querySelector('button[type="submit"]')!;
      fireEvent.click(submitButton);

      // Assert (initial error message present)
      const numberOfBeings = document.getElementById("numberOfBeings")!;
      const initialErrorMessage = numberOfBeings.nextElementSibling;

      expect(initialErrorMessage).toHaveTextContent(
        "Number of Beings must be at least 1,000,000,000 people."
      );

      fireEvent.change(numberOfBeings, {
        target: { value: "456455556456456" },
      });

      // Assert
      const errorMessageAfterChange = numberOfBeings.nextElementSibling!;
      expect(errorMessageAfterChange).not.toBeInTheDocument;
    });

    // ////////////////
  });

  describe("Tests for Two Plus Two dropdown", () => {
    let mockTwoPlusTwo: jest.Mock;

    beforeEach(() => {
      mockTwoPlusTwo = jest.fn();
      jest.mock("../validate/validate_number_of_beings", () => ({
        __esModule: true,
        default: mockTwoPlusTwo,
      }));
    });

    afterEach(() => {
      jest.resetAllMocks();
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
    test("Form validation displays Two Plus Two error message", () => {
      // Arrange
      mockTwoPlusTwo.mockReturnValue("2 + 2 must equal 4.");

      // Act
      render(<W12MForm />);

      const submitButton = document.querySelector('button[type="submit"]')!;
      fireEvent.click(submitButton);

      // Assert
      const twoPlusTwoSelect = screen.getByLabelText(
        "What is 2 + 2:"
      ) as HTMLSelectElement;
      const errorMessage = twoPlusTwoSelect.nextElementSibling;
      expect(errorMessage).toHaveTextContent("2 + 2 must equal 4.");
    });

    test("Form validation hides Two Plus Two error message", () => {
      // Arrange
      mockTwoPlusTwo
        .mockReturnValueOnce("2 + 2 must equal 4.")
        .mockReturnValueOnce("");

      // Act
      render(<W12MForm />);

      const submitButton = document.querySelector('button[type="submit"]')!;
      fireEvent.click(submitButton);

      const twoPlusTwoSelect = screen.getByLabelText(
        "What is 2 + 2:"
      ) as HTMLSelectElement;
      fireEvent.change(twoPlusTwoSelect, { target: { value: "Four" } });

      // Assert
      const errorMessageAfterChange = screen.queryByText("2 + 2 must equal 4.");
      expect(errorMessageAfterChange).not.toBeInTheDocument();
    });
  });

  describe("Tests for Two Reason For Sparing text area", () => {
    let mockValidateReasonForSparing: jest.Mock;

    beforeEach(() => {
      mockValidateReasonForSparing = jest.fn();
      jest.mock("../validate/validate_reason_for_sparing", () => ({
        __esModule: true,
        default: mockValidateReasonForSparing,
      }));
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    /////
    test("Reason For Sparing input updates state correctly", () => {
      // Arrange
      render(<W12MForm />);

      // Act
      const reasonForSparingInput = screen.getByLabelText(
        "Reason For Sparing?"
      ) as HTMLTextAreaElement;

      fireEvent.change(reasonForSparingInput, {
        target: {
          value:
            "We've got towels, the most versatile and handy item in the galaxy.",
        },
      });

      // Assert
      expect(reasonForSparingInput.value).toBe(
        "We've got towels, the most versatile and handy item in the galaxy."
      );
    });

    test("Form validation displays Reason For Sparing error message", () => {
      // Arrange
      mockValidateReasonForSparing.mockReturnValue(
        "Reason for Sparing must be between 17 and 153 characters."
      );

      // Act
      render(<W12MForm />);

      // Assert
      const errorMessage = screen.queryByText(
        "Reason for Sparing must be between 17 and 153 characters."
      );
      expect(errorMessage).toBeInTheDocument();
    });

    test("Form validation hides Reason For Sparing error message", () => {
      // Arrange
      mockValidateReasonForSparing.mockReturnValueOnce(
        "Reason for Sparing must be between 17 and 153 characters."
      );
      mockValidateReasonForSparing.mockReturnValueOnce("");

      // Act
      render(<W12MForm />);

      const submitButton = screen.getByLabelText("Submit form");
      fireEvent.click(submitButton);

      // Assert (initial error message present)
      const reasonForSparingInput = screen.getByLabelText(
        "Reason For Sparing?"
      ) as HTMLTextAreaElement;
      const initialErrorMessage = screen.queryByText(
        "Reason for Sparing must be between 17 and 153 characters."
      );

      expect(initialErrorMessage).toBeInTheDocument();

      fireEvent.change(reasonForSparingInput, {
        target: {
          value: "We have the best tea in the universe",
        },
      });

      // Assert
      const errorMessageAfterChange = screen.queryByText(
        "Reason for Sparing must be between 17 and 153 characters."
      );
      expect(errorMessageAfterChange).not.toBeInTheDocument();
    });
  });

  describe("Tests Entire form validation and submission", () => {
    let mockConsoleLog: jest.SpyInstance;

    beforeEach(() => {
      mockConsoleLog = jest.spyOn(console, "log").mockImplementation();
    });

    afterEach(() => {
      mockConsoleLog.mockRestore();
    });

    test("Test for console log output", () => {
      // Arrange
      render(<W12MForm />);

      // Act
      const speciesNameInput = screen.getByLabelText("Species Name:");
      fireEvent.change(speciesNameInput, { target: { value: "Human" } });

      const planetNameInput = screen.getByLabelText("Planet Name:");
      fireEvent.change(planetNameInput, { target: { value: "Earth" } });

      const numberOfBeingsInput = screen.getByLabelText("Number of Beings:");
      fireEvent.change(numberOfBeingsInput, {
        target: { value: "8078300999" },
      });

      const twoPlusTwoSelect = screen.getByLabelText("What is 2 + 2:");
      fireEvent.change(twoPlusTwoSelect, { target: { value: "Four" } });

      const reasonForSparingInput = screen.getByLabelText(
        "Reason For Sparing?"
      );
      fireEvent.change(reasonForSparingInput, {
        target: { value: "We have the cutest cats in the universe." },
      });

      const submitButton = screen.getByRole("button", { name: /submit form/i });

      fireEvent.click(submitButton);

      // Assert
      expect(console.log).toHaveBeenCalledWith("speciesName: Human");
      expect(console.log).toHaveBeenCalledWith("planetName: Earth");
      expect(console.log).toHaveBeenCalledWith("numberOfBeings: 8078300999");
      expect(console.log).toHaveBeenCalledWith("twoPlusTwo: Four");
      expect(console.log).toHaveBeenCalledWith(
        "reasonForSparing: We have the cutest cats in the universe."
      );
    });
  });
});
