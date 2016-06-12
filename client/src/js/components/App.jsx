import { Router, Route, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import React from 'react';
import Users from '~/components/Users';
import Groups from '~/components/Groups';
import Container from '~/components/Container';
import actionCreators from '~/actionCreators';

export default class App extends React.Component {
  static get displayName() {
    return 'App';
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
    });

    return connect(mapStateToProps, actionCreators)(component);
  }

  getRoutes() {
    return (<Route component={Container}>
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
