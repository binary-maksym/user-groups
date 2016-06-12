import React from 'react';
import Navigation from '~/components/Navigation';

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
      <Navigation { ...this.props }/>
      {this.props.children}
    </div>);
  }
}
