import Contact from '../components/Contact.module.css'

export const InputField = ({ name, type, placeholder, value, children, onChange }) => {
  
    const InputComponent = type === `textarea` ? `textarea` : `input`;
    return (
      <div className={Contact.inputbox}>
        <label className={Contact.label}
          htmlFor={name}
        >
          {children}
        </label>
        <InputComponent
          type={type === `textarea` ? undefined : type}
          className={Contact.input}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          rows={type === `textarea` ? 4 : undefined}
        />
      </div>
    );
  };