import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppForm from './../forms/AppForm';

// import * as AppSelectors from './../../data/app/AppSelectors';

// import './index.scss';

class AppContainer extends Component {

  render() {
    return (
      <div className="AppContainer">
        <AppForm onSubmit={this.props.handleSubmit} />
      </div>
    );
  }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (params) => {
    console.log('PARAMS', params);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
