import { render, screen } from "@testing-library/react";
import { SpeciesName } from "../components/speciesName";

// Mock the validateSpeciesName function
jest.mock("../validate/validate_species_name", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("SpeciesName component validation tests", () => {
  test("renders SpeciesName component with error message", () => {
    //Arrange
    const mockValidate = jest
      .fn()
      .mockReturnValue("Species Name must be between 3 and 23 characters");

    //Act1
    render(
      <SpeciesName
        speciesName="speciesName"
        onChangeSpeciesName={() => {}}
        validate={mockValidate}
      />
    );

    // Assert
    expect(
      screen.getByText("Species Name must be between 3 and 23 characters")
    ).toBeInTheDocument();
  });
});
