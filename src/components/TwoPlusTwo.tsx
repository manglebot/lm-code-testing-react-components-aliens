import { ErrorMessage } from "./ErrorMessage";

interface TwoPlusTwoProps {
  twoPlusTwo: string;
  onChangeTwoPlusTwo: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  validate: (value: string) => string;
}

export const TwoPlusTwo: React.FC<TwoPlusTwoProps> = ({
  twoPlusTwo,
  onChangeTwoPlusTwo,
  validate,
}) => {
  const errorMessage = validate(twoPlusTwo);
  return (
    <>
      <label htmlFor="twoPlusTwo" className="form__label">
        What is 2 + 2:
      </label>
      <select
        className="form__select"
        id="twoPlusTwo"
        onChange={onChangeTwoPlusTwo}
      >
        <option value="Not Four">Not Four</option>
        <option value="Four">Four</option>
      </select>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};
