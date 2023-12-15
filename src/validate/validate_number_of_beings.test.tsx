import { render, screen } from "@testing-library/react";
import { NumberOfBeings } from "../components/numberOfBeings";

jest.mock("../validate/validate_planet_name", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("NumberOfBeings component validation tests", () => {
  test("renders NumberOfBeings component with error message", () => {
    // Arrange
    const mockValidate = jest
      .fn()
      .mockReturnValue(
        "Number of Beings must be at least 1,000,000,000 people."
      );

    // Act
    render(
      <NumberOfBeings
        numberOfBeings="numberOfBeings"
        onChangeNumberOfBeings={() => {}}
        validate={mockValidate}
      />
    );

    // Assert
    expect(
      screen.getByText(
        "Number of Beings must be at least 1,000,000,000 people."
      )
    ).toBeInTheDocument();
  });
});
