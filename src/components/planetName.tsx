interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => (
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
  </>
);
