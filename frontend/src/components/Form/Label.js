import React from "react"
import { Form } from "react-bootstrap"

const FormLabel = props => {
  return (
    <Form.Label htmlFor={props.htmlFor}>
      <h6 className="display-6">{props.labelText}</h6>
    </Form.Label>
  )
}

export default FormLabel
