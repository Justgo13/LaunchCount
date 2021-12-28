import React from "react"
import { Form } from "react-bootstrap"

import Button from "../Button"

import "../../styles/form.css"

const CustomForm = props => {
  return (
    <Form className="form" onSubmit={props.submitHandler}>
      {props.children}
      <Button type="submit" className="blue-inverse form-submit-btn">
        Submit
      </Button>
    </Form>
  )
}

export default CustomForm
