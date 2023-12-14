interface PlanetNameProps {
  initialPlanetName: string;
  onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PlanetName: React.FC<PlanetNameProps> = ({
  initialPlanetName,
  onChangePlanetName,
}) => (
  <>
    <label htmlFor="planetName" className="form__label">
      Planet Name:
    </label>
    <input
      className="form__input"
      id="planetName"
      value={initialPlanetName}
      onChange={onChangePlanetName}
    />
  </>
);
