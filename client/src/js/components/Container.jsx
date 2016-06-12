import React from 'react';
import Navigation from '~/components/Navigation';
import ConnectionState from '~/components/ConnectionState';

export default class Container extends React.Component {
  static get displayName() {
    return 'Container';
  }

  static get propTypes() {
    return {
      children: React.PropTypes.node.isRequired,
    };
  }

  render() {
    return (<div className='Container'>
      <ConnectionState { ...this.props }/>
      <Navigation { ...this.props }/>
      {this.props.children}
    </div>);
  }
}
