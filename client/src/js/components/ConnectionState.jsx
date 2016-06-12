import Crouton from 'react-crouton';
import React from 'react';

export default class ConnectionState extends React.Component {
  static get displayName() {
    return 'ConnectionState';
  }

  static get propTypes() {
    return {
      state: React.PropTypes.number,
    };
  }

  getType() {
    switch (this.props.state) {
      case 0:
        return 'info';
      case 1:
        return 'info';
      case 2:
        return 'error';
      case 3:
        return 'info';
      case 4:
        return 'info';
      case 5:
        return 'error';
      default:
        return '';
    }
  }

  getMsg() {
    switch (this.props.state) {
      case 0:
        return 'connection';
      case 1:
        return 'connected';
      case 2:
        return 'connection timeout';
      case 3:
        return 'reconnected';
      case 4:
        return 'reconnecting';
      case 5:
        return 'reconnecting';
      default:
        return '';
    }
  }

  render() {
    return (<Crouton
      id={Date.now()}
      type={this.getType()}
      message={this.getMsg()}
      hidden={this.props.state === 1}
      autoMiss={false}/>);
  }
}
