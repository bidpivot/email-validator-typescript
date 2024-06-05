import { ChangeEvent } from 'react';


export interface FormLineProps {
  id: string;
  aria: string;
  label: string;
  value: string;  // Assuming you meant to have a `value` prop
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectValue: string;
  required?: boolean;
}

export default function DomainInput({ id, aria, label, value, placeholder, onChange, onSelectChange, selectValue, required }: FormLineProps) {


  return (<div className="form-line">
    <label htmlFor={id} aria-describedby={aria}>
      {label}
    </label>
    <div id="domain-input-line">
      <span id="at-span">@</span>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
      <select
        onChange={onSelectChange}
        value={selectValue}
        name="tld"
        id="tld"
      >
        <option value=".com">.com</option>
        <option value=".net">.net</option>
        <option value=".org">.org</option>
        <option value=".edu">.edu</option>
        <option value=".gov">.gov</option>
        <option value=".biz">.biz</option>
        <option value=".io">.io</option>
        <option value=".co">.co</option>
        <option value=".app">.app</option>
      </select>
    </div>
  </div>
  )
}
