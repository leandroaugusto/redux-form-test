import React, { Component } from 'react';
import { Col, FormGroup, ControlLabel, InputGroup, FormControl } from 'react-bootstrap';

import loader from './images/loader.gif';

import './Input.scss';
import './Input.css';

export default class Input extends Component {

  render() {
    const { input, label, type } = this.props;
    const { asyncValidating, touched, error } = this.props.meta;
    return (
      <FormGroup className="Input">
        <ControlLabel>{label}</ControlLabel>

        <InputGroup className={asyncValidating ? 'async-validating' : ''}>
          <Col xs={touched && error || asyncValidating ? 6 : 12}>
            <FormControl {...input} type={type} placeholder={label} />
          </Col>

          {asyncValidating &&
            <Col xs={6}>
              <img src={loader} alt="loading" />
            </Col>
          }

          {touched && error &&
            <Col xs={6}>
              <span>{error}</span>
            </Col>
          }
        </InputGroup>
      </FormGroup>
    )
  }

}
