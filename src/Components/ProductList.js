import React, { useEffect } from 'react';
import {axios} from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';


const ProductList = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    async function fetchProducts() {
        const api = 'https://fakestoreapi.com/products'
        const apidata = await fetch(api)
        const itemData = await apidata.json();
        dispatch(setProducts(itemData))
        
    }
    
    // const fetchProducts = async ()=>{
    //     const res = await axios.get('https://fakestoreapi.com/products')
    //     .catch((error)=>  { console.log('error', error) });
    //     console.log(res);
    //     dispatch(setProducts(res));
    // }

    useEffect(()=>{
        fetchProducts()
    }, [])

    console.log("Prods: ", products);

  return (
    <div className='ui grid container'>
        <ProductComponent />
      
        
    </div>
  )
}

export default ProductList;