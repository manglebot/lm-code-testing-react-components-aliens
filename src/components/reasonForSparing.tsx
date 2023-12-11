interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeReasonForSparing,
}) => (
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
    ></textarea>
  </>
);
