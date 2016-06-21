import { Router, Route, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import React from 'react';
import Users from '~/components/Users';
import Groups from '~/components/Groups';
import ContentContainer from '~/components/ContentContainer';
import actionCreators from '~/actionCreators';

export default class AppContainer extends React.Component {
  static get displayName() {
    return 'AppContainer';
  }

  static get propTypes() {
    return {
      store: React.PropTypes.object.isRequired,
    };
  }

  connect(component) {
    const mapStateToProps = (state) => ({
      users: state.get('users'),
      groups: state.get('groups'),
      state: state.get('connection_state'),
    });

    return connect(mapStateToProps, actionCreators)(component);
  }

  getRoutes() {
    return (<Route component={this.connect(ContentContainer)}>
      <Route path='/' component={this.connect(Users)}/>
      <Route path='/groups' component={this.connect(Groups)}/>
    </Route>);
  }

  render() {
    return (<Provider store={this.props.store}>
      <Router history={hashHistory}>{this.getRoutes()}</Router>
    </Provider>);
  }
}
