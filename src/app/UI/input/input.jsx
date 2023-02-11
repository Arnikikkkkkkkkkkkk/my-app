import React from 'react';

const Input = ({classInput, placeholder, type, required, name, value, onChange, dirty, invalid, onBlur, autocomplete}) => (
  <input 
    className={dirty ? `${classInput} ${invalid}` : `${classInput}`} 
    name={name} type={type} 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange}
    onBlur={onBlur}
    autoComplete={autocomplete} 
    required={required}/>
)

export default Input;
