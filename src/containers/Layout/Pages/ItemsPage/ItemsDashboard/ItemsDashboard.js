import React from 'react';
import { connect } from 'react-redux';

import ItemsCategory from './ItemsCategory/ItemsCategory';
import Spinner from '../../../../../components/UI/Spinner/Spinner';

import { isObjEmpty } from '../../../../../utils/validation.utils';

const ItemsDashboard = ({ categories, showInfoItem, auth }) => {
  let itemsCategories = auth && <Spinner />;

  if(isObjEmpty(categories) && auth) {
    const categoryNames = Object.keys(categories);
    
    itemsCategories = categoryNames.map(categoryName => {
      if(categories[categoryName].items.length > 0) {
        return (
          <ItemsCategory
            key={categories[categoryName].id}
            titleCategory={categories[categoryName].categoryName}
            arrItems={categories[categoryName].items}
            showInfoItemHandler={showInfoItem}
          />
        )
      }
    })
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