import { ErrorMessage } from "./ErrorMessage";

interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate: (value: string) => string;
}

export const PlanetName: React.FC<PlanetNameProps> = ({
  planetName: planetName,
  onChangePlanetName,
  validate,
}) => {
  const errorMessage = validate(planetName);
  return (
    <>
      <label htmlFor="planetName" className="form__label">
        Planet Name:
      </label>
      <input
        className="form__input"
        id="planetName"
        value={planetName}
        onChange={onChangePlanetName}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};
