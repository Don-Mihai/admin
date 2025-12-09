import { useState, useEffect, useCallback } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

import { ProductI } from '@/redux/Product/type';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchProduct, createProduct, editProduct, LocalProductI } from '@/redux/Product/product';

export const useProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<ProductI | undefined>(undefined);
  const products = useSelector((state: RootState) => state.product.product);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const openModal = useCallback(() => {
    setEditingProduct(undefined);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setEditingProduct(undefined);
  }, []);

  const handleCreateProduct = useCallback(
    (formValues: LocalProductI) => {
      dispatch(createProduct(formValues)).then(() => {
        dispatch(fetchProduct());
      });
    },
    [dispatch]
  );

  const handleEditProduct = useCallback(
    (formValues: ProductI) => {
      dispatch(editProduct(formValues)).then(() => {
        dispatch(fetchProduct());
      });
    },
    [dispatch]
  );

  const openEditModal = useCallback((product: ProductI) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  }, []);

  return {
    products,
    isModalOpen,
    editingProduct,
    openModal,
    closeModal,
    createProduct: handleCreateProduct,
    editProduct: handleEditProduct,
    openEditModal
  };
};
