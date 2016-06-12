import React from 'react';
import classnames from 'classnames';

export default class Navigation extends React.Component {
  static get displayName() {
    return 'Navigation';
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  render() {
    const currentLocation = this.props.location.pathname;
    return (<ul className='navigation'>
      <li className='navigation-item'>
        <a className={classnames('navigation-link', { 'is-active': currentLocation === '/' })}
          onClick={() => this.context.router.push('/')}>Users</a>
      </li>
      <li className='navigation-item'>
        <a className={classnames('navigation-link', { 'is-active': currentLocation === '/groups' })}
          onClick={() => this.context.router.push('/groups')}>
          Groups</a>
      </li>
    </ul>);
  }
}
