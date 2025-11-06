// CheckboxField.jsx
import React from 'react';

function CheckboxField({ checked, className }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      readOnly
      className={className}
    />
  );
}

export default CheckboxField;
