import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function DropDown({ item, handleInputChange }) {
  return (
    <div>
      <Select onValueChange={(value) => handleInputChange(item.name, value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent className='bg-white'>
          {item.options.map((option, index) => (
            <SelectItem key={option || index} value={option}>
              {option}
            </SelectItem>
          ))}

        </SelectContent>
      </Select>
    </div>
  )
}

export default DropDown
