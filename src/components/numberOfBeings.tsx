interface NumberOfBeingsProps {
  numberOfBeings: number;
  onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
}) => (
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
  </>
);
