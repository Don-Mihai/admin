import React from 'react';
import styles from './Catalog.css';
import Header from '../../components/Header/Header';

export default function Catalog() {
  return (
    <div>
      <div className="wrapper">
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
                <button className="button">Add New Product</button>
              </div>
            </div>
          </div>
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
              <div className="products__img">
                <img src="./ps.png" alt="" className="img" />
              </div>
              <p className="products__title">PS5 DualSense</p>
              <p className="products__price">$150.50</p>
              <div className="products__bottom">
                <p className="products__stock">
                  Stock: <span className="bold">544</span>
                </p>
                <p className="products__sold">
                  Sold: <span className="bold">544</span>
                </p>
              </div>
            </div>
            <div className="products__cards">
              <div className="products__img">
                <img src="./sony.webp" alt="" className="img" />
              </div>
              <p className="products__title">PlayStation 5</p>
              <p className="products__price">$750.50</p>
              <div className="products__bottom">
                <p className="products__stock">
                  Stock: <span className="bold">584</span>
                </p>
                <p className="products__sold">
                  Sold: <span className="bold">554</span>
                </p>
              </div>
            </div>
            <div className="products__cards">
              <div className="products__img">
                <img src="./pk.png" alt="" className="img" />
              </div>
              <p className="products__title">Monitor</p>
              <p className="products__price">$450.50</p>
              <div className="products__bottom">
                <p className="products__stock">
                  Stock: <span className="bold">544</span>
                </p>
                <p className="products__sold">
                  Sold: <span className="bold">544</span>
                </p>
              </div>
            </div>
            <div className="products__cards">
              <div className="products__img">
                <img src="./iphone.png" alt="" className="img" />
              </div>
              <p className="products__title">Iphone</p>
              <p className="products__price">$950.50</p>
              <div className="products__bottom">
                <p className="products__stock">
                  Stock: <span className="bold">544</span>
                </p>
                <p className="products__sold">
                  Sold: <span className="bold">544</span>
                </p>
              </div>
            </div>
            <div className="products__cards">
              <div className="products__img">
                <img src="./AirTag.png" alt="" className="img" />
              </div>
              <p className="products__title">AirTag</p>
              <p className="products__price">$150.50</p>
              <div className="products__bottom">
                <p className="products__stock">
                  Stock: <span className="bold">544</span>
                </p>
                <p className="products__sold">
                  Sold: <span className="bold">544</span>
                </p>
              </div>
            </div>
            <div className="products__cards">
              <div className="products__img">
                <img src="./Credit Card Reader.png" alt="" className="img" />
              </div>
              <p className="products__title">Credit Card Reader</p>
              <p className="products__price">$150.50</p>
              <div className="products__bottom">
                <p className="products__stock">
                  Stock: <span className="bold">544</span>
                </p>
                <p className="products__sold">
                  Sold: <span className="bold">544</span>
                </p>
              </div>
            </div>
            <div className="products__cards">
              <div className="products__img">
                <img src="./AirPods Max.png" alt="" className="img" />
              </div>
              <p className="products__title">AirPods Max</p>
              <p className="products__price">$150.50</p>
              <div className="products__bottom">
                <p className="products__stock">
                  Stock: <span className="bold">544</span>
                </p>
                <p className="products__sold">
                  Sold: <span className="bold">544</span>
                </p>
              </div>
            </div>

            <div className="products__cards">
              <div className="products__img">
                <img src="./Fitness Tracker.png" alt="" className="img" />
              </div>
              <p className="products__title">Fitness Tracker</p>
              <p className="products__price">$150.50</p>
              <div className="products__bottom">
                <p className="products__stock">
                  Stock: <span className="bold">544</span>
                </p>
                <p className="products__sold">
                  Sold: <span className="bold">544</span>
                </p>
              </div>
            </div>
            <div className="products__cards">
              <div className="products__img">
                <img src="./Smart Light Bulb.png" alt="" className="img" />
              </div>
              <p className="products__title">Smart Light Bulb</p>
              <p className="products__price">$150.50</p>
              <div className="products__bottom">
                <p className="products__stock">
                  Stock: <span className="bold">544</span>
                </p>
                <p className="products__sold">
                  Sold: <span className="bold">544</span>
                </p>
              </div>
            </div>
            <div className="products__cards">
              <div className="products__img">
                <img src="./Smart Lock.png" alt="" className="img" />
              </div>
              <p className="products__title">Smart Lock</p>
              <p className="products__price">$150.50</p>
              <div className="products__bottom">
                <p className="products__stock">
                  Stock: <span className="bold">544</span>
                </p>
                <p className="products__sold">
                  Sold: <span className="bold">544</span>
                </p>
              </div>
            </div>
            <div className="products__cards">
              <div className="products__img">
                <img src="./AirPods.png" alt="" className="img" />
              </div>
              <p className="products__title">AirPods</p>
              <p className="products__price">$150.50</p>
              <div className="products__bottom">
                <p className="products__stock">
                  Stock: <span className="bold">544</span>
                </p>
                <p className="products__sold">
                  Sold: <span className="bold">544</span>
                </p>
              </div>
            </div>
            <div className="products__cards">
              <div className="products__img">
                <img src="./Selfie Ring Light.png" alt="" className="img" />
              </div>
              <p className="products__title">Selfie Ring Light</p>
              <p className="products__price">$50.50</p>
              <div className="products__bottom">
                <p className="products__stock">
                  Stock: <span className="bold">244</span>
                </p>
                <p className="products__sold">
                  Sold: <span className="bold">34</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
