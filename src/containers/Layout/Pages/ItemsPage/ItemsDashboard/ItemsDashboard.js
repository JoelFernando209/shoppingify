import React from 'react';

import ItemsCategory from './ItemsCategory/ItemsCategory';

const ItemsDashboard = () => {
  const arrItems = [
    {
      title: 'Avocado'
    },
    {
      title: 'chicken'
    },
    {
      title: 'apple'
    },
    {
      title: 'Avocado'
    },
    {
      title: 'chicken'
    },
    {
      title: 'apple'
    },
    {
      title: 'Avocado'
    },
    {
      title: 'chicken'
    },
    {
      title: 'apple'
    }
  ];
  
  return (
    <>
      <ItemsCategory titleCategory='Fruit and Vegetables' arrItems={arrItems} />
      <ItemsCategory titleCategory='Fruit and Vegetables' arrItems={arrItems} />
    </>
  );
};

export default ItemsDashboard;