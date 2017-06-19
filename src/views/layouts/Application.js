import React, { Component } from 'react';

export default class ApplicationLayout extends Component {
  render() {
    return (
      <div className="ApplicationLayout">
        {this.props.children}
      </div>
    )
  }
}
