import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PopupContext from './context/PopupContext';

import Layout from './containers/Layout/Layout';
import ItemsPage from './containers/Layout/Pages/ItemsPage/ItemsPage';
import HistoryPage from './containers/Layout/Pages/HistoryPage/HistoryPage';
import StatisticsPage from './containers/Layout/Pages/StatisticsPage/StatisticsPage';

import { openPopupBasedOnAuth } from './firebase/FirebaseUtils/firebase.auth';
import { snapshotItems } from './firebase/FirebaseUtils/firebase.firestore';

import * as actionTypes from './store/actions';

const App = ({ setPopupStatus }) => {
  const [ products, setProducts ] = useState([]);
  const [ spinnerStatus, setSpinnerStatus ] = useState(false);
  
  const checkIfUserAuth = () => {
    openPopupBasedOnAuth(setPopupStatus)
  }
  
  const showSpinner = () => {
    setSpinnerStatus(true);
  };
  
  const hideSpinner = () => {
    setSpinnerStatus(false);
  };
  
  useEffect(() => {
    checkIfUserAuth();
    
    snapshotItems(setProducts);
  }, []);
  
  return (
    <PopupContext.Provider value={{
      checkIfUserAuth,
      showSpinner,
      hideSpinner
    }}>
      <Layout>
          <Route exact path='/' render={() => <ItemsPage products={products} />} />
          <Route path='/history' component={HistoryPage} />
          <Route path='/statistics' component={StatisticsPage} />
      </Layout>
    </PopupContext.Provider>
  );
}

const mapDispatchToProps = dispatch => ({
  setPopupStatus: result => dispatch({ type: actionTypes.SET_LOG_POPUP, value: result })
});

export default connect(null, mapDispatchToProps)(App);
