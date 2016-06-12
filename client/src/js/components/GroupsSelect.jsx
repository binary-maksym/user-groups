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
    let i = 1;
    let groupOptions = groups.map((group) => <option value={group} key={i++}>{group}</option>);
    if (!this.props.multiple) {
      groupOptions.unshift(<option value='' key={i++}>Select group</option>);
    }

    return <select { ...this.props }>{groupOptions}</select>;
  }
}
