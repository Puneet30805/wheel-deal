import { Input } from '@/components/ui/input'
import React from 'react'

function InputField({ item, handleInputChange }) {
  return (
    <div>
      <Input
        id={item.name}
        name={item.name}
        required={item.required}
        placeholder={item.label}
        type={item.fieldType === "number" ? "number" : "text"}
        onChange={(e) => handleInputChange(item.name, e.target.value)}
      />
    </div>
  )
}

export default InputField
