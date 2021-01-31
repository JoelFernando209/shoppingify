import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './containers/Layout/Layout';
import ItemsPage from './containers/Layout/Pages/ItemsPage/ItemsPage';
import HistoryPage from './containers/Layout/Pages/HistoryPage/HistoryPage';
import StatisticsPage from './containers/Layout/Pages/StatisticsPage/StatisticsPage';

import { openPopupBasedOnAuth } from './firebase/FirebaseUtils/firebase.auth';

import * as actions from './store/actions/index';

const App = ({ onSetPopupStatus }) => {
  const checkIfUserAuth = () => {
    openPopupBasedOnAuth(onSetPopupStatus)
  }
  
  useEffect(() => {
    checkIfUserAuth();
  }, []);
  
  return (
    <Layout>
      <Route exact path='/' component={ItemsPage} />
      <Route path='/history' component={HistoryPage} />
      <Route path='/statistics' component={StatisticsPage} />
    </Layout>
  );
}

const mapDispatchToProps = dispatch => ({
  onSetPopupStatus: result => dispatch(actions.setLogPopup(result))
});

export default connect(null, mapDispatchToProps)(App);
