import { ChangeEvent } from 'react';


export interface FormLineProps {
  id: string;
  aria: string;
  label: string;
  value: string;  // Assuming you meant to have a `value` prop
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function FormLine({id, aria, label, value, placeholder, onChange, required}: FormLineProps) {


  return (<div className="form-line">
    <label htmlFor={id} aria-describedby={aria}>
    {label}      
    </label>
    <input
      id={id}
      type="text"
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  </div>
  )
}
