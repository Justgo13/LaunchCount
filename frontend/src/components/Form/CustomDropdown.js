import React from "react"
import { Dropdown } from "react-bootstrap"
import uuid from "react-uuid"

import "../../styles/form.css"

const CustomDropdown = ({
  dropdownToggleText,
  dropdownChoices,
  setDropdownState,
  dropdownVariant,
}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant={`${dropdownVariant || "primary"}`}
        id="dropdown-basic"
      >
        {dropdownToggleText}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {dropdownChoices.map(choice => (
          <Dropdown.Item key={uuid()} href="" onClick={() => setDropdownState(choice)}>
            {choice}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default CustomDropdown
