import './TextInput.scss'
import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

interface Props {
  required: boolean;
  type: HTMLInputTypeAttribute;
  label: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const TextInput: React.FC<Props> = ({ required, type, label, value, name, onChange}) => {
  return (
      <input
        className='textField'
        required={required}
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        name={name}
      />
  );
}