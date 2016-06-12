import React from 'react';
import classnames from 'classnames';
import { Map } from 'immutable';
import UserModal from '~/components/UserModal';

export default class UserName extends React.Component {
  static get displayName() {
    return 'UserName';
  }

  static get propTypes() {
    return {
      groups: React.PropTypes.instanceOf(Map),
      user: React.PropTypes.string,
      deleteUser: React.PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      groups: Map(),
    };
  }

  constructor() {
    super();
    this.state = {
      isShowingModal: false,
    };
  }

  handleClose() {
    this.setState({ isShowingModal: false });
  }

  handleOpen() {
    this.setState({ isShowingModal: true });
  }

  getModal() {
    return (<UserModal {...this.props}
      handleClose={() => this.handleClose()}
      isShowingModal={this.state.isShowingModal} />);
  }

  render() {
    let userEl;
    let button;

    if (this.props.user) {
      userEl = (<a
        className={classnames('user-name')}
        title={this.props.user}
        onClick={() => this.handleOpen()}>{this.props.user}</a>);
      button = (<button
        className={classnames('user-del-button')}
        onClick={() => this.props.deleteUser({ user: this.props.user })}>-</button>);
    } else {
      userEl = (<span
        className={classnames('user-name-new')}
        onClick={() => this.handleOpen()}>Add user</span>);
      button = (<button
        className={classnames('user-add-button')}
        onClick={() => this.handleOpen()}>+</button>);
    }

    return <div className={classnames('user-cell', 'col')}>{button}{userEl}{this.getModal()}</div>;
  }
}
