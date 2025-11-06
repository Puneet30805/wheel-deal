import React from 'react'
import { Textarea } from "@/components/ui/textarea"

function TextareaField({ item, handleInputChange }) {
  return (
    <div>
      <Textarea
        id={item.name}
        name={item.name}
        required={item.required}
        placeholder={item.label}
        onChange={(e) => handleInputChange(item.name, e.target.value)}
      />
    </div>
  )
}

export default TextareaField
