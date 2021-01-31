import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: {}
};

const setProducts = ({ snapshot }) => {
  let setProductsObj = {};
  
  snapshot.forEach(doc => {
    const docItem = {
      ...doc.data(),
      id: doc.id
    }
    
    const { categoryItem } = doc.data();
    
    if(!(categoryItem in setProductsObj)) {
      setProductsObj = {
        ...setProductsObj,
        [categoryItem]: {
          categoryName: categoryItem,
          id: categoryItem,
          items: [docItem]
        }
      }
    } else {
      setProductsObj[categoryItem].items.push(docItem);
    }
  })
  
  return {
    products: setProductsObj
  }
};

const addProduct = (state, action) => {
  const { products } = state;
  const { categoryItem } = action.product;
  
  const productUpdate = {
    ...products,
    [categoryItem]: {
      ...products[categoryItem],
      items: products[categoryItem].items.concat(action.product)
    }
  }
  
  return {
    products: productUpdate
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_PRODUCTS: return setProducts(action)
    
    case actionTypes.ADD_PRODUCT: return addProduct(state, action)
    
    default:
      return state;
  }
};

export default reducer;