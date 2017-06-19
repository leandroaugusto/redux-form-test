import React, { Component } from 'react';
import { Col, FormGroup, ControlLabel, InputGroup, FormControl } from 'react-bootstrap';

import loader from './images/loader.gif';

import './Input.css';

export default class Input extends Component {

  render() {
    const { input, label, type } = this.props;
    const { asyncValidating, touched, error } = this.props.meta;

    return (
      <FormGroup
        validationState={touched && error ? 'error' : null}
        className="Input"
      >
        <ControlLabel>{label}</ControlLabel>

        <InputGroup>
          <Col xs={asyncValidating ? 10 : 12}>
            <FormControl {...input} type={type} placeholder={label} />
            {touched && error &&
              <span className="Input__error">{error}</span>
            }
          </Col>

          {asyncValidating &&
            <Col xs={2}>
              <img src={loader} alt="loading" />
            </Col>
          }
        </InputGroup>
      </FormGroup>
    )
  }

}
