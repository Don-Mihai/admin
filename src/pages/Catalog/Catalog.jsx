import React from "react";
import styles from "./Catalog.css";
import Header from "../../components/Header/Header";

export default function Catalog() {
  return (
    <div>
      <div class="wrapper">
        <Header />
        <section class="product-section container">
          <div class="title">
            <p class="title__left">Products</p>
            <div class="title__right">
              <div class="input__container">
                <img src="./search.svg" alt="" class="input__img" />
                <input
                  class="input"
                  type="search"
                  placeholder="search product.."
                />
              </div>
              <div class="button__container">
                <img src="./plus.svg" alt="" class="plus" />
                <button class="button">Add New Product</button>
              </div>
            </div>
          </div>
          <nav class="product">
            <a href="" class="tovari__active">
              All products
            </a>
            <a href="" class="tovari">
              Most Purchased
            </a>
            <a href="" class="tovari">
              Furniture
            </a>
            <a href="" class="tovari">
              Shoes
            </a>
            <a href="" class="tovari">
              Clothes
            </a>
            <a href="" class="tovari">
              Electronic
            </a>
            <a href="" class="tovari">
              Sports
            </a>
            <a href="" class="tovari">
              Crocery
            </a>
          </nav>
          <div class="product__container">
            <div class="products__cards">
              <div class="products__img">
                <img src="./ps.png" alt="" class="img" />
              </div>
              <p class="products__title">PS5 DualSense</p>
              <p class="products__price">$150.50</p>
              <div class="products__bottom">
                <p class="products__stock">
                  Stock: <span class="bold">544</span>
                </p>
                <p class="products__sold">
                  Sold: <span class="bold">544</span>
                </p>
              </div>
            </div>
            <div class="products__cards">
              <div class="products__img">
                <img src="./sony.webp" alt="" class="img" />
              </div>
              <p class="products__title">PlayStation 5</p>
              <p class="products__price">$750.50</p>
              <div class="products__bottom">
                <p class="products__stock">
                  Stock: <span class="bold">584</span>
                </p>
                <p class="products__sold">
                  Sold: <span class="bold">554</span>
                </p>
              </div>
            </div>
            <div class="products__cards">
              <div class="products__img">
                <img src="./pk.png" alt="" class="img" />
              </div>
              <p class="products__title">Monitor</p>
              <p class="products__price">$450.50</p>
              <div class="products__bottom">
                <p class="products__stock">
                  Stock: <span class="bold">544</span>
                </p>
                <p class="products__sold">
                  Sold: <span class="bold">544</span>
                </p>
              </div>
            </div>
            <div class="products__cards">
              <div class="products__img">
                <img src="./iphone.png" alt="" class="img" />
              </div>
              <p class="products__title">Iphone</p>
              <p class="products__price">$950.50</p>
              <div class="products__bottom">
                <p class="products__stock">
                  Stock: <span class="bold">544</span>
                </p>
                <p class="products__sold">
                  Sold: <span class="bold">544</span>
                </p>
              </div>
            </div>
            <div class="products__cards">
              <div class="products__img">
                <img src="./AirTag.png" alt="" class="img" />
              </div>
              <p class="products__title">AirTag</p>
              <p class="products__price">$150.50</p>
              <div class="products__bottom">
                <p class="products__stock">
                  Stock: <span class="bold">544</span>
                </p>
                <p class="products__sold">
                  Sold: <span class="bold">544</span>
                </p>
              </div>
            </div>
            <div class="products__cards">
              <div class="products__img">
                <img src="./Credit Card Reader.png" alt="" class="img" />
              </div>
              <p class="products__title">Credit Card Reader</p>
              <p class="products__price">$150.50</p>
              <div class="products__bottom">
                <p class="products__stock">
                  Stock: <span class="bold">544</span>
                </p>
                <p class="products__sold">
                  Sold: <span class="bold">544</span>
                </p>
              </div>
            </div>
            <div class="products__cards">
              <div class="products__img">
                <img src="./AirPods Max.png" alt="" class="img" />
              </div>
              <p class="products__title">AirPods Max</p>
              <p class="products__price">$150.50</p>
              <div class="products__bottom">
                <p class="products__stock">
                  Stock: <span class="bold">544</span>
                </p>
                <p class="products__sold">
                  Sold: <span class="bold">544</span>
                </p>
              </div>
            </div>

            <div class="products__cards">
              <div class="products__img">
                <img src="./Fitness Tracker.png" alt="" class="img" />
              </div>
              <p class="products__title">Fitness Tracker</p>
              <p class="products__price">$150.50</p>
              <div class="products__bottom">
                <p class="products__stock">
                  Stock: <span class="bold">544</span>
                </p>
                <p class="products__sold">
                  Sold: <span class="bold">544</span>
                </p>
              </div>
            </div>
            <div class="products__cards">
              <div class="products__img">
                <img src="./Smart Light Bulb.png" alt="" class="img" />
              </div>
              <p class="products__title">Smart Light Bulb</p>
              <p class="products__price">$150.50</p>
              <div class="products__bottom">
                <p class="products__stock">
                  Stock: <span class="bold">544</span>
                </p>
                <p class="products__sold">
                  Sold: <span class="bold">544</span>
                </p>
              </div>
            </div>
            <div class="products__cards">
              <div class="products__img">
                <img src="./Smart Lock.png" alt="" class="img" />
              </div>
              <p class="products__title">Smart Lock</p>
              <p class="products__price">$150.50</p>
              <div class="products__bottom">
                <p class="products__stock">
                  Stock: <span class="bold">544</span>
                </p>
                <p class="products__sold">
                  Sold: <span class="bold">544</span>
                </p>
              </div>
            </div>
            <div class="products__cards">
              <div class="products__img">
                <img src="./AirPods.png" alt="" class="img" />
              </div>
              <p class="products__title">AirPods</p>
              <p class="products__price">$150.50</p>
              <div class="products__bottom">
                <p class="products__stock">
                  Stock: <span class="bold">544</span>
                </p>
                <p class="products__sold">
                  Sold: <span class="bold">544</span>
                </p>
              </div>
            </div>
            <div class="products__cards">
              <div class="products__img">
                <img src="./Selfie Ring Light.png" alt="" class="img" />
              </div>
              <p class="products__title">Selfie Ring Light</p>
              <p class="products__price">$50.50</p>
              <div class="products__bottom">
                <p class="products__stock">
                  Stock: <span class="bold">244</span>
                </p>
                <p class="products__sold">
                  Sold: <span class="bold">34</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
