import { ErrorMessage } from "./ErrorMessage";

interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate: (value: string) => string;
}

export const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName: speciesName,
  onChangeSpeciesName,
  validate,
}) => {
  const errorMessage = validate(speciesName);
  return (
    <>
      <label htmlFor="speciesName" className="form__label">
        Species Name:
      </label>
      <input
        className="form__input"
        id="speciesName"
        value={speciesName}
        onChange={onChangeSpeciesName}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};
