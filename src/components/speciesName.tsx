interface SpeciesNameProps {
  initialSpeciesName: string;
  onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SpeciesName: React.FC<SpeciesNameProps> = ({
  initialSpeciesName,
  onChangeSpeciesName,
}) => (
  <>
    <label htmlFor="speciesName" className="form__label">
      Species Name:
    </label>
    <input
      className="form__input"
      id="speciesName"
      value={initialSpeciesName}
      onChange={onChangeSpeciesName}
    />
  </>
);
