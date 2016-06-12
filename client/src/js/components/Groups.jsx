import React from 'react';
import GroupItem from '~/components/GroupItem';
import classnames from 'classnames';
import { Map } from 'immutable';

export default class Groups extends React.Component {
  static get displayName() {
    return 'Groups';
  }

  static get propTypes() {
    return {
      groups: React.PropTypes.instanceOf(Map),
    };
  }

  static get defaultProps() {
    return {
      groups: Map(),
    };
  }

  render() {
    let lines = [];
    let i = 1;
    this.props.groups.map((v, k) => k).sort((a, b) => a > b ? 1 : -1).forEach((group) => {
      lines.push(<GroupItem
        { ...this.props }
        key={i}
        id={i}
        group={group} />);
      i++;
    });

    lines.push(<GroupItem
      { ...this.props }
      id={i}
      key={i} />);

    return <div className={classnames('list', 'groups-list')}>{lines}</div>;
  }
}
