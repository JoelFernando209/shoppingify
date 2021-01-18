import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import ItemsPage from './containers/Layout/Pages/ItemsPage/ItemsPage';
import HistoryPage from './containers/Layout/Pages/HistoryPage/HistoryPage';
import StatisticsPage from './containers/Layout/Pages/StatisticsPage/StatisticsPage';

const App = () => {
  return (
    <div>
      <Layout>
        <Route exact path='/' component={ItemsPage} />
        <Route path='/history' component={HistoryPage} />
        <Route path='/statistics' component={StatisticsPage} />
      </Layout>
    </div>
  );
}

export default App;
