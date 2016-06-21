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
      switchModal: React.PropTypes.func,
      userModalShow: React.PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      groups: Map(),
      userModalShow: false,
    };
  }

  getModal() {
    return (<UserModal {...this.props}
      handleClose={() => this.props.switchModal()}
      isShowingModal={this.props.userModalShow} />);
  }

  render() {
    let userEl;
    let button;

    if (this.props.user) {
      userEl = (<a
        className={classnames('user-name')}
        title={this.props.user}
        onClick={() => this.props.switchModal()}>{this.props.user}</a>);
      button = (<button
        className={classnames('user-del-button')}
        onClick={() => this.props.switchModal({ user: this.props.user })}>-</button>);
    } else {
      userEl = (<span
        className={classnames('user-name-new')}
        onClick={() => this.props.switchModal()}>Add user</span>);
      button = (<button
        className={classnames('user-add-button')}
        onClick={() => this.props.switchModal()}>+</button>);
    }

    return <div className={classnames('user-cell', 'col')}>{button}{userEl}{this.getModal()}</div>;
  }
}
