import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Grid, Row, Col } from 'react-bootstrap';

import Input from './../components/Input';

import { AppSyncValidate } from './../validations/appSyncValidation';
import { AppAsyncValidation } from './../validations/appAsyncValidation';

import './AppForm.css';

class AppForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="AppForm">
        <Grid>
          <Row>
            <Field
              component={Input}
              type="text"
              label="Nome"
              name="username"
            />
          </Row>
          <Row>
            <Field
              component={Input}
              type="email"
              label="Email"
              name="email"
            />
          </Row>
          <Row>
            <Field
              component={Input}
              type="text"
              label="Apelido"
              name="nickname"
            />
          </Row>
          <Row>
            <Col xs={6}>
              <button type="submit">Enviar</button>
            </Col>
          </Row>
        </Grid>
      </form>
    );
  }

}

export default reduxForm({
  form: 'appForm',
  validate: AppSyncValidate,
  asyncValidate: AppAsyncValidation,
  asyncBlurFields: ['email', 'nickname'],
})(AppForm);
