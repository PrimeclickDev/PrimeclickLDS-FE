import "./input.css";

export default function Input({
  name,
  label,
  placeholder,
  type,
  setValue,
  required,
  minLength,
  maxlength,
  bgColor,
  textClr,
}) {
  return (
    <div className="input">
      <label htmlFor={name} style={{ color: textClr }}>
        {label}
      </label>
      <input
        type={type ? type : "text"}
        id={name}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        minLength={minLength}
        maxLength={maxlength}
        style={{ backgroundColor: bgColor, color: textClr }}
      />
    </div>
  );
}
