import React from "react";
import { TbCheckbox } from "react-icons/tb";
export default function CheckboxPoints({ point }) {
  return (
    <div className="checkbox-point">
      <TbCheckbox />
      <p>{point}</p>
    </div>
  );
}
