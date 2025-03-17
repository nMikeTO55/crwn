import {createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments } from '../utils/firebase/firebase.util';

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({children}) =>{

  const [products, setProducts] = useState([]);

  /* Only used to load firestore db one time.
  useEffect(()=>{
    addCollectionAndDocuments('categories', SHOP_DATA);
  }, []);
*/

  const value = {products};
  return(
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
}