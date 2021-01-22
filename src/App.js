import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import PopupContext from './context/PopupContext';

import Layout from './containers/Layout/Layout';
import ItemsPage from './containers/Layout/Pages/ItemsPage/ItemsPage';
import HistoryPage from './containers/Layout/Pages/HistoryPage/HistoryPage';
import StatisticsPage from './containers/Layout/Pages/StatisticsPage/StatisticsPage';

const App = () => {
  const [ products, setProducts ] = useState([
    {
      id: 1,
      categoryTitle: 'Fruits',
      itemsProduct: [
        {
          id: 1,
          title: 'Avocado'
        },
        {
          id: 2,
          title: 'chicken'
        },
        {
          id: 3,
          title: 'apple'
        },
        {
          id: 4,
          title: 'Avocado'
        },
        {
          id: 5,
          title: 'chicken'
        },
        {
          id: 6,
          title: 'apple'
        },
        {
          id: 7,
          title: 'Avocado'
        },
        {
          id: 8,
          title: 'chicken'
        },
        {
          id: 9,
          title: 'apple'
        }
      ]
    },
    {
      id: 2,
      categoryTitle: 'Vegetables',
      itemsProduct: [
        {
          id: 1,
          title: 'Avocado'
        },
        {
          id: 2,
          title: 'chicken'
        },
        {
          id: 3,
          title: 'apple'
        },
        {
          id: 4,
          title: 'Avocado'
        },
        {
          id: 5,
          title: 'chicken'
        },
        {
          id: 6,
          title: 'apple'
        },
        {
          id: 7,
          title: 'Avocado'
        },
        {
          id: 8,
          title: 'chicken'
        },
        {
          id: 9,
          title: 'apple'
        }
      ]
    }
  ]);
  
  const [ ingresarPopupStatus, setIngresarPopupStatus ] = useState(true);
  
  const hidePopup = () => {
    setIngresarPopupStatus(false);
  };
  
  const showPopup = () => {
    setIngresarPopupStatus(true);
  };
  
  return (
    <PopupContext.Provider value={{
      popupStatus: ingresarPopupStatus,
      hidePopup,
      showPopup
    }}>
      <Layout popupStatus={ingresarPopupStatus} changePopupStatus={setIngresarPopupStatus}>
          <Route exact path='/' render={() => <ItemsPage products={products} />} />
          <Route path='/history' component={HistoryPage} />
          <Route path='/statistics' component={StatisticsPage} />
      </Layout>
    </PopupContext.Provider>
  );
}

export default App;
