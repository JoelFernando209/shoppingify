import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ItemsDashboard from './ItemsDashboard/ItemsDashboard';
import Header from '../../../../components/UI/Header/Header';

import { filterList } from '../../../../utils/immutable.utils';

import * as actions from '../../../../store/actions/index';

const ItemsPage = ({ onSetProducts, showInfoItem, productsList }) => {
  const [ searchWord, setSearchWord ] = useState('');
  const [ searchProducts, setSearchProducts ] = useState({});
  
  const checkSearchWord = () => searchWord.trim().length > 0;
  
  const searchWordHandler = event => {
    const valueEvent = event.target.value.trim();
    
    if(valueEvent.length <= 20 && valueEvent.length > 0) {
      setSearchWord(valueEvent);
      
      setSearchProducts(filterList(valueEvent, productsList))
    } else {
      setSearchWord('');
      setSearchProducts({});
    }
  }
  
  useEffect(() => {
    onSetProducts();
  }, [onSetProducts])
  
  return (
    <>
      <Header searchWordHandler={searchWordHandler} />
      
      { checkSearchWord() && <div style={{ fontWeight: '600', fontSize: '2.5rem', marginBottom: '1rem' }}>Search for "{searchWord}"</div> }
      
      <div style={{ position: 'relative' }}>
        <ItemsDashboard showInfoItem={showInfoItem} searchProducts={searchProducts} />
      </div>
    </>
  )
};

const mapStateToProps = state => ({
  productsList: state.products.products
});

const mapDispatchToProps = dispatch => ({
  onSetProducts: () => dispatch(actions.getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ItemsPage));