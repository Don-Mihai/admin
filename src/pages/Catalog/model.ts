import React, { useState, useEffect, ChangeEvent } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

import { ProductI } from '@/redux/Product/type';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchProduct } from '@/redux/Product/product';

export const useProduct = () => {
  const products = useSelector((state: RootState) => state.product.product);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return {
    products
  };
};
