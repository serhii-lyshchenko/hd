import { ChangeEvent } from 'react';

interface IInputDateProps {
  name: string;
  value: string;
  placeholder?: string;
  className?: string;
  timeListName: string;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputDate(props: IInputDateProps) {
  function getStyles() {
    let styles = `font-sans h-14 px-4 block w-full border border-black rounded outline-black ${props.className}`;

    if (props.error) {
      styles += ' text-red border-red outline-red';
    }

    return styles;
  }

  return (
    <>
      <input
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        list={props.timeListName}
        min="10:00"
        max="19:00"
        type="time"
        className={getStyles()}
      />
      <datalist id={props.timeListName}>
        <option value="10:00" />
        <option value="11:00" />
        <option value="12:00" />
        <option value="13:00" />
        <option value="14:00" />
        <option value="15:00" />
        <option value="16:00" />
        <option value="17:00" />
        <option value="18:00" />
        <option value="19:00" />
      </datalist>
    </>
  );
}
