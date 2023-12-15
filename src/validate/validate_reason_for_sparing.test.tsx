import { render, screen } from "@testing-library/react";
import { ReasonForSparing } from "../components/reasonForSparing";

jest.mock("../validate/validate_planet_name", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("ReasonForSparing component validation tests", () => {
  test("renders ReasonForSparing component with error message", () => {
    // Arrange
    const mockValidate = jest
      .fn()
      .mockReturnValue("Planet Name can not contain special characters.");

    // Act
    render(
      <ReasonForSparing
        reasonForSparing="reasonForSparing"
        onChangeReasonForSparing={() => {}}
        validate={mockValidate}
      />
    );

    // Assert
    expect(
      screen.getByText("Planet Name can not contain special characters.")
    ).toBeInTheDocument();
  });
});
