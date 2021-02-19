import React from 'react';
import { connect } from 'react-redux';

import ItemsCategory from './ItemsCategory/ItemsCategory';
import Spinner from '../../../../../components/UI/Spinner/Spinner';

import { isObjEmpty } from '../../../../../utils/validation.utils';

const ItemsDashboard = ({ categories, showInfoItem, auth, searchProducts }) => {
  let itemsCategories = auth && <Spinner />;

  const setCategoryNames = (objNames, obj) => {
    return objNames.map(categoryName => {
      if(obj[categoryName].items.length > 0) {
        return (
          <ItemsCategory
            key={obj[categoryName].id}
            titleCategory={obj[categoryName].categoryName}
            arrItems={obj[categoryName].items}
            showInfoItemHandler={showInfoItem}
          />
        )
      }
      
      return null;
    })
  };

  if(isObjEmpty(categories) && auth) {

    if(Object.keys(searchProducts).length > 0) {
      const categoryNames = Object.keys(searchProducts);
      
      itemsCategories = setCategoryNames(categoryNames, searchProducts);
    } else {
      const categoryNames = Object.keys(categories);
      
      itemsCategories = setCategoryNames(categoryNames, categories);
    }
  }
  
  return (
    <>
      {itemsCategories}
    </>
  );
};

const mapStateToProps = state => ({
  categories: state.products.products,
  auth: state.user.isAuth
});

export default connect(mapStateToProps)(ItemsDashboard);