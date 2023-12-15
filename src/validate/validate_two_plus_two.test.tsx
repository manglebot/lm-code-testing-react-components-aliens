import { render, screen } from "@testing-library/react";
import { TwoPlusTwo } from "../components/twoPlusTwo";

jest.mock("../validate/validate_two_plus_two", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("TwoPlusTwo component validation tests", () => {
  test("renders TwoPlusTwo component with error message", () => {
    // Arrange
    const mockValidate = jest.fn().mockReturnValue("2 + 2 must equal 4.");

    // Act
    render(
      <TwoPlusTwo
        twoPlusTwo="twoPlusTwo"
        onChangeTwoPlusTwo={() => {}}
        validate={mockValidate}
      />
    );

    // Assert
    expect(screen.getByText("2 + 2 must equal 4.")).toBeInTheDocument();
  });
});
