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

const setProductsSync = (state, action) => ({
  ...state,
  products: action.newProducts
});

const addProduct = (state, action) => {
  const { products } = state;
  const { categoryItem } = action.product;
  
  let categoryItemVal;
  
  if(categoryItem in products) {
    categoryItemVal = {
      ...products[categoryItem],
      items: products[categoryItem].items.concat(action.product)
    };
    
  } else {
    categoryItemVal = {
      categoryName: categoryItem,
      id: categoryItem,
      items: [action.product]
    };
  }
  
  const productUpdate = {
    ...products,
    [categoryItem]: categoryItemVal
  }
  
  return {
    products: productUpdate
  }
}

const removeProduct = (state, action) => {
  let productUpdate = { ...state.products };
  const { categoryItem } = action.product;
  
  const category = { ...productUpdate[categoryItem] };
  const categoryItems = [ ...category.items ];
  
  const deleteIndex = categoryItems.findIndex(element => element.id === action.product.id);
  
  if(deleteIndex !== -1) {
    categoryItems.splice(deleteIndex, 1)
  }
  
  const updatedProductList = {
    ...productUpdate,
    [categoryItem]: {
      ...category,
      items: categoryItems
    }
  }
  
  return {
    ...state,
    products: updatedProductList
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_PRODUCTS_SYNC: return setProductsSync(state, action);
    
    case actionTypes.REMOVE_PRODUCT: return removeProduct(state, action)
    
    case actionTypes.SET_PRODUCTS: return setProducts(action)
    
    case actionTypes.ADD_PRODUCT: return addProduct(state, action)
    
    default:
      return state;
  }
};

export default reducer;