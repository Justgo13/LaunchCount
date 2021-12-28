import React from "react"
import { Form } from "react-bootstrap"

import CustomDropdown from "./CustomDropdown"
import FormLabel from "./Label"

import "../../styles/form.css"

const DropdownGroup = ({
  labelText,
  htmlFor,
  dropdownToggleText,
  dropdownChoices,
  setDropdownState,
  dropdownVariant
}) => {
  return (
    <Form.Group className="mb-3">
      <FormLabel labelText={labelText} htmlFor={htmlFor} />
      <CustomDropdown
        dropdownToggleText={dropdownToggleText}
        dropdownChoices={dropdownChoices}
        setDropdownState={setDropdownState}
        dropdownVariant={dropdownVariant}
      />
    </Form.Group>
  )
}

export default DropdownGroup
