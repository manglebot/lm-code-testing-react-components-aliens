import { ErrorMessage } from "./ErrorMessage";

interface NumberOfBeingsProps {
  numberOfBeings: string;
  onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate: (value: string) => string;
}

export const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
  validate,
}) => {
  const errorMessage = validate(numberOfBeings);
  return (
    <>
      <label htmlFor="NumberOfBeings" className="form__label">
        Number of Beings:
      </label>
      <input
        className="form__input"
        id="NumberOfBeings"
        value={numberOfBeings}
        onChange={onChangeNumberOfBeings}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};
