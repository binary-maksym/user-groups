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
    };
  }

  static get defaultProps() {
    return {
      users: Map(),
      groups: Map(),
    };
  }

  constructor() {
    super();
    this.state = {
      userFilter: '',
      groupFilter: '',
    };
  }

  handleGroupFilter(val) {
    this.setState({ groupFilter: val });
  }

  getFilterInput() {
    return (<input
      className={classnames('filter-user')}
      placeholder='Search'
      onChange={(e) => this.setState({ userFilter: e.target.value })} />);
  }

  getGroupsFilter() {
    return (<GroupsSelect
      className={classnames('filter-group')}
      groups={this.props.groups}
      value={this.state.groupFilter}
      onChange={(e) => this.handleGroupFilter(e.target.value)} />);
  }

  render() {
    return (<div className={classnames('users')}>
      <div className={classnames('filter')}>
        {this.getFilterInput()}
        {this.getGroupsFilter()}
      </div>
      <UserTable
        { ...this.props }
        userFilter={this.state.userFilter}
        groupFilter={this.state.groupFilter}
        handleGroupFilter={(val) => this.handleGroupFilter(val)} />
    </div>);
  }

}
