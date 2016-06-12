import { Map } from 'immutable';
import React from 'react';
import classnames from 'classnames';
import UserName from '~/components/UserName';

export default class UsersTable extends React.Component {
  static get displayName() {
    return 'UsersTable';
  }

  static get propTypes() {
    return {
      groups: React.PropTypes.instanceOf(Map),
      users: React.PropTypes.instanceOf(Map),
      userFilter: React.PropTypes.string,
      groupFilter: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      users: Map(),
      groups: Map(),
    };
  }

  filterUsers() {
    let users = this.props.users;
    if (this.props.userFilter) {
      const regExp = new RegExp(`^${this.props.userFilter}`, 'i');
      users = users.filter((groups, user) => user.match(regExp));
    }

    if (this.props.groupFilter) {
      users = users.filter((groups) => groups.has(this.props.groupFilter));
    }

    return users;
  }

  getUserGroups(user) {
    const groups = user ? this.props.users.get(user).keySeq().join() : '';
    return <div className={classnames('user-groups', 'col')} title={groups}>{groups}</div>;
  }

  getUserLine(key, user) {
    return (<div key={key} className={classnames('user-line', 'row', { 'is-grey': !(key % 2) })}>
      <UserName { ...this.props } user={user}/>
      {this.getUserGroups(user)}
    </div>);
  }

  render() {
    const users = [];
    let i = 1;

    this.filterUsers().keySeq().sort((a, b) => a > b ? 1 : -1).forEach((user) => {
      users.push(this.getUserLine(i, user));
      i++;
    });

    users.push(this.getUserLine(i));

    return <div className={classnames('user-list', 'list')}>{users}</div>;
  }
}
