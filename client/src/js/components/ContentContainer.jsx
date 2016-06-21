import React from 'react';
import Navigation from '~/components/Navigation';
import ConnectionState from '~/components/ConnectionState';

export default class ContentContainer extends React.Component {
  static get displayName() {
    return 'ContentContainer';
  }

  static get propTypes() {
    return {
      children: React.PropTypes.node.isRequired,
    };
  }

  render() {
    return (<div className='ContentContainer'>
      <ConnectionState { ...this.props }/>
      <Navigation { ...this.props }/>
      {this.props.children}
    </div>);
  }
}
