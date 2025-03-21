import React from 'react'

const FormGroup = ({ 
  labelText, 
  inputType, 
  placeholder, 
  values, 
  onInput, 
  onKeyUp, 
  onChange,
  className,
  reference,
  readOnly = false,
}) => {
  return (
    <div className="form-group">
        <label>{labelText}</label>
        <input 
          type={inputType}
          placeholder={placeholder} 
          value={values} 
          onInput={onInput} 
          onKeyUp={onKeyUp}
          onChange={onChange}
          className={className}
          readOnly={readOnly}
          ref={reference}
        />
    </div>
  )
}

export default FormGroup
