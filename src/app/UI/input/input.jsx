import React from 'react';

const Input = ({classInput, placeholder, type, required, name, value, onChange, dirty, invalid, onBlur, autocomplete, max, min, step, onMouseMove}) => (
  <input 
    className={dirty ? `${classInput} ${invalid}` : `${classInput}`} 
    name={name} type={type} 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange}
    onBlur={onBlur}
    onMouseMove={onMouseMove}
    autoComplete={autocomplete} 
    max={max}
    step={step}
    min={min}
    required={required}/>
)

export default Input;
