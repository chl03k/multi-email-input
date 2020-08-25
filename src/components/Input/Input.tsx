import React, { useState, useEffect } from 'react'
import { Input as StyledInput } from './styles';

interface Props {
  onChange: Function,
  onKeyDown: Function,
  resetValue: Boolean,
}

const Input = ({ onChange, onKeyDown, resetValue }: Props) => {

  const [value, setValue] = useState<string>("")
  const [placeHolder, setPlaceHolder] = useState<Boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange(event.target.value)
  }

  const handleKeyDown = (event: KeyboardEvent, value: string) => {
    const keyCode = event.key || event.keyCode;
    if (keyCode === 9) {
      event.preventDefault();
    }
    onKeyDown(keyCode, value)
  }

  useEffect(() => {
    // Clean input if resetValue toggle
    setValue('')
  }, [resetValue]);

  return (
    <StyledInput
      className="email-input"
      type="text"
      placeholder={placeHolder ? "Enter recipients" : ''}
      onFocus={() => { setPlaceHolder(false) }}
      onChange={handleChange}
      onKeyDown={(e: KeyboardEvent) => { handleKeyDown(e, value) }}
      value={value}
    />
  )
}

export default Input;