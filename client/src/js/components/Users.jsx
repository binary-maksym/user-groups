import React from 'react';
import UserTable from '~/components/UserTable';
import GroupsSelect from '~/components/GroupsSelect';
import { Map } from 'immutable';
import classnames from 'classnames';

export default class Users extends React.Component {
  static get displayName() {
    return 'Users';
  }

  static get propTypes() {
    return {
      groups: React.PropTypes.instanceOf(Map).isRequired,
      users: React.PropTypes.instanceOf(Map).isRequired,
      filterGroups: React.PropTypes.func.isRequired,
      filterUsers: React.PropTypes.func.isRequired,
      groupFilter: React.PropTypes.string,
      usersFilter: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      users: Map(),
      groups: Map(),
      usersFilter: '',
      groupFilter: '',
    };
  }

  getFilterInput() {
    return (<input
      className={classnames('filter-user')}
      placeholder='Search'
      onChange={(e) => this.props.filterUsers({ group: e.target.value })} />);
  }

  getGroupsFilter() {
    return (<GroupsSelect
      className={classnames('filter-group')}
      groups={this.props.groups}
      value={this.props.groupFilter}
      onChange={(e) => this.props.filterGroups({ group: e.target.value })} />);
  }

  render() {
    return (<div className={classnames('users')}>
      <div className={classnames('filter')}>
        {this.getFilterInput()}
        {this.getGroupsFilter()}
      </div>
      <UserTable
        { ...this.props }
        userFilter={this.props.usersFilter}
        groupFilter={this.props.groupFilter}
        handleGroupFilter={(val) => this.handleGroupFilter(val)} />
    </div>);
  }

}
