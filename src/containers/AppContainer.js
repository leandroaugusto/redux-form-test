import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reset} from 'redux-form';
// import { getFormValues } from 'redux-form';
import { Grid, Row, Col } from 'react-bootstrap';

import AppForm from './../forms/AppForm';

import { formData } from './../data/form/FormActions';
import * as FormSelectors from './../data/form/FormSelectors';

import './AppContainer.css';

class AppContainer extends Component {

  render() {
    const { formData, handleSubmit } = this.props;

    console.log('STATE', this.props.formData);

    return (
      <div className="AppContainer">
        <AppForm onSubmit={handleSubmit} />

        {formData &&
          <Grid>
            <Row>
              <Col xs={12}>
                <p className="AppContainer__message">
                  Olá <span>{formData.username}</span>!<br />
                  Seu email é: <span>{formData.email}</span>.<br />
                  E seu apelido é: <span>{formData.nickname}</span>.
                </p>
              </Col>
            </Row>
          </Grid>
        }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  // formData: getFormValues('appForm')(state),
  formData: FormSelectors.formData(state),
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (params) => {
    dispatch(formData(params));
    dispatch(reset('appForm'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
