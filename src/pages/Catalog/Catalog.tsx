import './Catalog.css';
import Header from '../../components/Header/Header';
import { useProduct } from './model';
import { ProductI } from '@/redux/Product/type';
import { memo } from 'react';
import ProductModal from '@/components/ProductModal/ui';
import { MODAL_MODE } from '@/components/Modal/ui';

export default memo(function Catalog() {
  const { products, isModalOpen, editingProduct, openModal, closeModal, createProduct, editProduct, openEditModal } = useProduct();

  return (
    <div>
      <Header />
      <section className="product-section container">
        <div className="title">
          <p className="title__left">Products</p>
          <div className="title__right">
            <div className="input__container">
              <img src="./search.svg" alt="" className="input__img" />
              <input className="input" type="search" placeholder="search product.." />
            </div>
            <div className="button__container">
              <img src="./plus.svg" alt="" className="plus" />
              <button className="button" onClick={openModal}>
                Add New Product
              </button>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <ProductModal
            title={editingProduct ? 'Редактирование товара' : 'Добавление товара'}
            onCreateProduct={createProduct}
            onEditProduct={editProduct}
            onClose={closeModal}
            mode={editingProduct ? MODAL_MODE.EDIT : MODAL_MODE.CREATE}
            product={editingProduct}
          />
        )}
        <nav className="product">
          <a href="" className="tovari__active">
            All products
          </a>
          <a href="" className="tovari">
            Most Purchased
          </a>
          <a href="" className="tovari">
            Furniture
          </a>
          <a href="" className="tovari">
            Shoes
          </a>
          <a href="" className="tovari">
            Clothes
          </a>
          <a href="" className="tovari">
            Electronic
          </a>
          <a href="" className="tovari">
            Sports
          </a>
          <a href="" className="tovari">
            Crocery
          </a>
        </nav>
        <div className="product__container">
          <div className="products__cards">
            {products.map((product: ProductI) => {
              return (
                <div key={product.id} className="product-card" onClick={() => openEditModal(product)} style={{ cursor: 'pointer' }}>
                  <div className="products__img">
                    <img src={product.image} alt={product.title} className="img" />
                  </div>
                  <p className="products__title">{product.title}</p>
                  <p className="products__price">${product.price}</p>
                  <div className="products__bottom">
                    <p className="products__stock">
                      Stock: <span className="bold">{product.stock}</span>
                    </p>
                    <p className="products__sold">
                      Sold: <span className="bold">{product.sold}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
});
