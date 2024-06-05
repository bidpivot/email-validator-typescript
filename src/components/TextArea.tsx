export interface TextAreaProps {
  value: string;  // Assuming you meant to have a `value` prop
}

export default function TextArea({ value }: TextAreaProps) {
  return (<div><label htmlFor="emails" aria-describedby='generated emails'></label>
    <textarea
      name="emails"
      id="emails"
      value={value}
      className="text"
      readOnly
    ></textarea>
  </div>)
}
