import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import ItemsPage from './components/ItemsPage/ItemsPage';
import HistoryPage from './components/HistoryPage/HistoryPage';

const App = () => {
  return (
    <div>
      <Layout>
        <Route exact path='/' component={ItemsPage} />
        <Route path='/history' component={HistoryPage} />
      </Layout>
    </div>
  );
}

export default App;
