import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProductI } from '@/redux/Product/type';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchProduct } from '@/redux/Product/product';

export const useDashboard = () => {
  const products = useSelector((state: RootState) => state.product.product) as ProductI[];

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return {
    products
  };
};
