import React from 'react';
import {Form} from "react-bootstrap"

const FormGroup = props => {
    return (
        <Form.Group className={`mb-3 ${props.className}`}>
            {props.children}
        </Form.Group>
    );
}

export default FormGroup;
