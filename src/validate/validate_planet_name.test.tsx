import { render, screen } from "@testing-library/react";
import { PlanetName } from "../components/planetName";

jest.mock("../validate/validate_planet_name", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("PlanetName component validation tests", () => {
  test("renders PlanetName component with error message", () => {
    // Arrange
    const mockValidate = jest
      .fn()
      .mockReturnValue("Planet Name can not contain special characters.");

    // Act
    render(
      <PlanetName
        planetName="planetName"
        onChangePlanetName={() => {}}
        validate={mockValidate}
      />
    );

    // Assert
    expect(
      screen.getByText("Planet Name can not contain special characters.")
    ).toBeInTheDocument();
  });
});
