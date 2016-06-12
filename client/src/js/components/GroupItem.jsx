import React from 'react';
import classnames from 'classnames';
import { Map } from 'immutable';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export default class GroupItem extends React.Component {
  static get displayName() {
    return 'GroupItem';
  }

  static get propTypes() {
    return {
      groups: React.PropTypes.instanceOf(Map),
      users: React.PropTypes.instanceOf(Map),
      group: React.PropTypes.string,
      deleteGroup: React.PropTypes.func,
      addGroup: React.PropTypes.func,
      id: React.PropTypes.number,
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
      newGroup: '',
      error: false,
    };
  }

  handleNewChange(val) {
    if (val && this.props.groups.has(val)) {
      this.setState({ error: true, newGroup: undefined });
    } else {
      this.setState({ error: false, newGroup: val });
    }
  }

  handleAdd() {
    if (!this.state.error && this.state.newGroup) {
      this.props.addGroup({ group: this.state.newGroup });
      this.setState({ error: false, newGroup: undefined });
    }
  }

  handleDelete(group) {
    const filteredUsers = this.props.users.filter((groups) => groups.has(group));
    if (filteredUsers.isEmpty()) {
      this.props.deleteGroup({ group });
    } else {
      this.setState({ error: true });
      setTimeout(() => this.setState({ error: false }), 1000);
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleAdd();
      const newInput = document.getElementsByClassName('new-group');
      if (newInput.length) {
        setTimeout(() => newInput[0].focus(), 1);
      }
    }
  }

  getClassName() {
    return classnames('group-item', 'row', { 'is-grey': !(this.props.id % 2) });
  }

  getContainerNewGroup() {
    return (<div className={this.getClassName()}>
      <button
        className={classnames('group-add-button')}
        onClick={() => this.handleAdd()}>+</button>
      {this.getErrorTooltip(<input
        type='text'
        placeholder='Add group'
        className={classnames('new-group', { error: this.state.error })}
        onKeyPress = {(e) => this.handleKeyPress(e)}
        onChange={(e) => this.handleNewChange(e.target.value)} />,
        this.state.error,
        <span>Group exists!</span>)}
    </div>);
  }

  getContainerGroup(group) {
    return (<div className={this.getClassName()}>
      {this.getErrorTooltip(<div className='col'>
        <button
          className={classnames('group-del-button')}
          onClick={() => this.handleDelete(group)}>-</button>
        </div>,
        this.state.error,
        <span>Group has users!</span>)}
      <span className={classnames('group-name')}>{group}</span>
    </div>);
  }

  getErrorTooltip(children, visible, msg) {
    return (<Tooltip
      visible={visible}
      animation='zoom'
      trigger='click'
      overlay={msg}>
      {children}
    </Tooltip>);
  }

  render() {
    const group = this.props.group;
    return group ? this.getContainerGroup(group) : this.getContainerNewGroup();
  }
}
