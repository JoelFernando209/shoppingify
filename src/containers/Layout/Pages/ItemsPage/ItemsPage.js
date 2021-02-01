import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ItemsDashboard from './ItemsDashboard/ItemsDashboard';
import Header from '../../../../components/UI/Header/Header';

import * as actions from '../../../../store/actions/index';

const ItemsPage = ({ onSetProducts }) => {

  useEffect(() => {
    onSetProducts();
  }, [onSetProducts])
  
  return (
    <>
      <Header />
      <ItemsDashboard />
    </>
  )
};

const mapDispatchToProps = dispatch => ({
  onSetProducts: () => dispatch(actions.getProducts())
});

export default connect(null, mapDispatchToProps)(ItemsPage);