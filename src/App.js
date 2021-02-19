import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './containers/Layout/Layout';
import ItemsPage from './containers/Layout/Pages/ItemsPage/ItemsPage';
import HistoryPage from './containers/Layout/Pages/HistoryPage/HistoryPage';
import StatisticsPage from './containers/Layout/Pages/StatisticsPage/StatisticsPage';
import HistoryListInfo from './components/HistoryPage/HistoryListInfo/HistoryListInfo';

import { openPopupBasedOnAuth } from './firebase/FirebaseUtils/firebase.auth';

import * as actions from './store/actions/index';

const App = ({ onSetPopupStatus, onCheckAuth, onSetShoppingName }) => {
  const [ infoItemStatus, setInfoItemStatus ] = useState(false);
  const [ currentInfoItem, setCurrentInfoItem ] = useState({});
  const [ deleteButtonStatus, setDeleteButtonStatus ] = useState(true);
  
  const checkIfUserAuth = () => {
    openPopupBasedOnAuth(onSetPopupStatus)
  }
  
  const showInfoItem = (item, deleteStatus) => {
    setInfoItemStatus(true);
    
    setCurrentInfoItem(item);
    
    setDeleteButtonStatus(deleteStatus);
  };
  
  const hideInfoItem = () => {
    setInfoItemStatus(false);
  };
  
  useEffect(() => {
    checkIfUserAuth();
    onCheckAuth();
    onSetShoppingName();
  }, [onCheckAuth, onSetShoppingName]);
  
  return (
    <Layout
      infoItemStatus={infoItemStatus}
      hideInfoItem={hideInfoItem}
      currentInfoItem={currentInfoItem}
      deleteButtonStatus={deleteButtonStatus}
    >
      <Route exact path='/' render={() => <ItemsPage showInfoItem={showInfoItem} />} />

      <Switch>
        <Route path='/history/:nameList' render={() => <HistoryListInfo showInfoItem={showInfoItem} />} />
        <Route path='/history' component={HistoryPage} />
      </Switch>
      
      <Route path='/statistics' component={StatisticsPage} />
      
      <Redirect to='/' />
    </Layout>
  );
}

const mapDispatchToProps = dispatch => ({
  onSetPopupStatus: result => dispatch(actions.setLogPopup(result)),
  onCheckAuth: () => dispatch(actions.checkAuth()),
  onSetShoppingName: () => dispatch(actions.getShoppingName())
});

export default connect(null, mapDispatchToProps)(App);
