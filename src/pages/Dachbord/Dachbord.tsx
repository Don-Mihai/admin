import './Dachbord.css';
import Header from '../../components/Header/Header';
import { memo } from 'react';

export default memo(function Dachbord() {
  return (
    <div>
      <Header />
      <section className="dashbord container">
        <div className="top__container">
          <h3 className="title">Products statistic</h3>
          <div className="filteres"></div>
        </div>
        <div className="analitics">
          <div className="total analitic">
            <div className="total__item">0</div>
            <div className="total__content">
              <h2 className="total__title">Total products</h2>
              <h2 className="total__price">3456 / 5000</h2>
              <h4 className="total__procent">+2.6% since last year</h4>
            </div>
          </div>
          <div className="sold analitic">
            <canvas id="myChart"></canvas>
          </div>
          <div className="diagram analitic">
            <canvas id="diagram"></canvas>
          </div>
        </div>
      </section>
    </div>
  );
});
