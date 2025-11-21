import React from 'react';
import styles from './Dachbord.css';
import Header from '../../components/Header/Header';
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/counter';

export default function Dachbord() {
  const dispatch = useDispatch();
  return (
    <div>
      <div class="wrapper">
        <Header />
        <section class="dashbord container">
          <div class="top__container">
            <h3 class="title">Products statistic</h3>
            <button onClick={() => dispatch(increment())}>+</button>
            <div class="filteres"></div>
          </div>
          <div class="analitics">
            <div class="total analitic">
              <div class="total__item">0</div>
              <div class="total__content">
                <h2 class="total__title">Total products</h2>
                <h2 class="total__price">3456 / 5000</h2>
                <h4 class="total__procent">+2.6% since last year</h4>
              </div>
            </div>
            <div class="sold analitic">
              <canvas id="myChart"></canvas>
            </div>
            <div class="diagram analitic">
              <canvas id="diagram"></canvas>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
