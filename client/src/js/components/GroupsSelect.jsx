import React from 'react';
import { Map } from 'immutable';

export default class GroupsSelect extends React.Component {
  static get displayName() {
    return 'GroupsSelect';
  }

  static get propTypes() {
    return {
      groups: React.PropTypes.instanceOf(Map).isRequired,
      multiple: React.PropTypes.number,
    };
  }

  static get defaultProps() {
    return {
      groups: Map(),
    };
  }

  render() {
    const groups = this.props.groups.keySeq().toArray();
    let groupOptions = groups.map((group, key) => <option value={group} key={key}>{group}</option>);
    if (!this.props.multiple) {
      groupOptions.unshift(<option value='' key='selectGroup'>Select group</option>);
    }

    return <select { ...this.props }>{groupOptions}</select>;
  }
}
