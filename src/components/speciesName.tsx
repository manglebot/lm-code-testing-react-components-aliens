import React, { useState } from "react";

interface SpeciesNameProps {
  initialSpeciesName: string;
}

export const SpeciesName: React.FC<SpeciesNameProps> = ({
  initialSpeciesName,
}) => {
  const [speciesName, setSpeciesName] = useState(initialSpeciesName);

  const onChangeSpeciesName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeciesName(e.target.value);
  };

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
    </>
  );
};
