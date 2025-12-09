import React from 'react';
import './styles.css';
import { useProductModalForm } from './model';
import { ProductI } from '@/redux/Product/type';
import { LocalProductI } from '@/redux/Product/product';
import { createPortal } from 'react-dom';
import { MODAL_MODE } from '@/components/Modal/ui';

interface Props {
  onCreateProduct?: (formValues: LocalProductI) => void;
  onEditProduct?: (formValues: ProductI) => void;
  onClose: () => void;
  title: string;
  mode: MODAL_MODE;
  product?: ProductI;
}

function ProductModal({ onClose, onCreateProduct, onEditProduct, title, mode, product }: Props) {
  const { register, handleSubmit, formState, onSubmit } = useProductModalForm(
    onClose,
    mode,
    product,
    onCreateProduct,
    onEditProduct
  );

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <form onSubmit={handleSubmit((formValues) => onSubmit(formValues, product?.id))}>
          <div className="modal__content">
            <input {...register('image')} type="text" placeholder="URL изображения" className="name" />
            <p className="error">{formState.errors.image?.message}</p>

            <input {...register('title')} type="text" placeholder="Название товара" className="email" />
            <p className="error">{formState.errors.title?.message}</p>

            <input {...register('price')} type="number" step="0.01" placeholder="Цена" className="role" />
            <p className="error">{formState.errors.price?.message}</p>

            <input {...register('stock')} type="number" placeholder="Количество на складе" className="created" />
            <p className="error">{formState.errors.stock?.message}</p>

            <input {...register('sold')} type="number" placeholder="Количество проданных" className="status" />
            <p className="error">{formState.errors.sold?.message}</p>
          </div>

          <div className="modal-actions">
            <button type="submit">Сохранить</button>
            <button type="button" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

export default ProductModal;

