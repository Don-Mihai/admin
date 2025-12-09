import { addProduct } from '../../utiles/validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { ProductI } from '@/redux/Product/type';
import { LocalProductI } from '@/redux/Product/product';
import { MODAL_MODE } from '@/components/Modal/ui';
import { useEffect } from 'react';

export const useProductModalForm = (
  onClose: () => void,
  mode: MODAL_MODE,
  product?: ProductI,
  onCreateProduct?: (formValues: LocalProductI) => void,
  onEditProduct?: (formValues: ProductI) => void
) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(addProduct)
  });

  useEffect(() => {
    if (MODAL_MODE.EDIT === mode && product) {
      reset({
        image: product.image,
        title: product.title,
        price: product.price,
        stock: product.stock,
        sold: product.sold
      });
    }
  }, [mode, product, reset]);

  const onSubmit = async (formValues: LocalProductI | ProductI, productId?: string | number) => {
    if (!productId && mode === MODAL_MODE.CREATE) {
      try {
        onCreateProduct?.(formValues as LocalProductI);
        reset();
        onClose();
      } catch (error) {
        toast.error('Ошибка при добавлении товара');
        console.error(error);
      }
    }

    if (productId && mode === MODAL_MODE.EDIT) {
      try {
        onEditProduct?.({ ...formValues, id: productId } as ProductI);
        reset();
        onClose();
      } catch (error) {
        toast.error('Ошибка при редактировании товара');
        console.error(error);
      }
    }
  };

  return { register, handleSubmit, formState, onSubmit };
};

