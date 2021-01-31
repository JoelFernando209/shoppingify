import React from 'react';
import { connect } from 'react-redux';

import ItemsCategory from './ItemsCategory/ItemsCategory';

const ItemsDashboard = ({ categories }) => {
  const categoryNames = Object.keys(categories);
  
  const itemsCategories = categoryNames.map(categoryName => {
    return (
      <ItemsCategory
        key={categories[categoryName].id}
        titleCategory={categories[categoryName].categoryName}
        arrItems={categories[categoryName].items}
      />
    )
  })
  
  return (
    <>
      {itemsCategories}
    </>
  );
};

const mapStateToProps = state => ({
  categories: state.products.products
});

export default connect(mapStateToProps)(ItemsDashboard);