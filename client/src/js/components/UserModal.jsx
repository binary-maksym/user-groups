import React from 'react';
import GroupsSelect from '~/components/GroupsSelect';
import { Map } from 'immutable';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import classnames from 'classnames';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export default class UserModal extends React.Component {
  static get displayName() {
    return 'UserModal';
  }

  static get propTypes() {
    return {
      users: React.PropTypes.instanceOf(Map).isRequired,
      groups: React.PropTypes.instanceOf(Map).isRequired,
      user: React.PropTypes.string,
      addUser: React.PropTypes.func,
      changeUser: React.PropTypes.func,
      handleClose: React.PropTypes.func.isRequired,
      isShowingModal: React.PropTypes.bool.isRequired,
    };
  }

  static get defaultProps() {
    return {
      users: Map(),
      groups: Map(),
    };
  }

  componentWillMount() {
    this.setDefaultState();
  }

  setDefaultState() {
    const groups = this.props.user ?
      this.props.users.get(this.props.user, Map()).keySeq().toArray() : [];

    this.setState({ groups });
    this.setState({ newUser: this.props.user });
    this.setState({ userNameError: false });
    this.setState({ groupsError: false });
  }

  handleUserChange(user) {
    if (!user || this.props.users.has(user)) {
      this.setState({ userNameError: true });
    } else {
      this.setState({ userNameError: false });
      this.setState({ newUser: user });
    }
  }

  handleGroupsChange(options) {
    if (!options.length) {
      this.setState({ groupsError: true });
    } else {
      this.setState({ groupsError: false });
      const groups = [];

      for (let i = 0; i < options.length; i++) {
        const option = options[i];
        if (option.selected) {
          groups.push(option.value);
        }
      }

      this.setState({ groups });
    }
  }

  handleSave() {
    if (!this.state.userNameError &&
      this.state.newUser &&
      !this.state.groupsError &&
      this.state.groups.length
    ) {
      this.props[this.props.user ? 'changeUser' : 'addUser']({
        user: this.state.newUser,
        groups: this.state.groups,
      });

      this.props.handleClose();
    } else {
      if (!this.state.newUser) {
        this.setState({ userNameError: true });
      }

      if (!this.state.groups.length) {
        this.setState({ groupsError: true });
      }
    }
  }

  handleClose() {
    this.setDefaultState();
    this.props.handleClose();
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

  getModal() {
    const userField = (<input
      disabled={this.props.user ? 'disabled' : false}
      value={this.props.user}
      className={classnames('user-field', { error: this.state.userNameError })}
      onChange={(e) => this.handleUserChange(e.target.value)} />);

    return (<ModalContainer onClose={() => this.handleClose()}>
      <ModalDialog onClose={() => this.handleClose()} className='user-modal'>
        <div className='user-modal-content'>
          <div className={classnames('row')}>
            <div className={classnames('col', 'label')}>User:</div>
            {this.getErrorTooltip(
              <div className={classnames('col')}>{userField}</div>,
              this.state.userNameError, 'Invalid user')}
          </div>
          <div className={classnames('row')}>
            <div className={classnames('col', 'label')}>Groups:</div>
            <div className={classnames('col')}>
            {this.getErrorTooltip(
              <GroupsSelect {...this.props}
                className='user-groups-input'
                multiple={1}
                value={this.state.groups}
                onChange={(e) => this.handleGroupsChange(e.target.options)} />,
              this.state.groupsError, 'Select group')}
            </div>
          </div>
          <div className={classnames('row')}>
            <button
              className={classnames('col', 'user-save-button')}
              onClick={() => this.handleSave()}>Save user</button>
          </div>
        </div>
      </ModalDialog>
    </ModalContainer>);
  }

  render() {
    return this.props.isShowingModal ? this.getModal() : <div />;
  }
}
