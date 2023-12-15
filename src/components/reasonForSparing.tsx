import { ErrorMessage } from "./ErrorMessage";

interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  validate: (value: string) => string;
}

export const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeReasonForSparing,
  validate,
}) => {
  const errorMessage = validate(reasonForSparing);
  return (
    <>
      <label htmlFor="reasonForSparing" className="form__label">
        Reason For Sparing?
      </label>
      <textarea
        className="form__textarea"
        id="reasonForSparing"
        value={reasonForSparing}
        rows={4}
        cols={50}
        onChange={onChangeReasonForSparing}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};
