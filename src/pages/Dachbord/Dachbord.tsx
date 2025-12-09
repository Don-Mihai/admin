import './Dachbord.css';
import Header from '../../components/Header/Header';
import { memo, useMemo } from 'react';
import { useDashboard } from './model';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#8dd1e1', '#d084d0', '#ffb347', '#87ceeb'];

export default memo(function Dachbord() {
  const { products } = useDashboard();

  const chartData = useMemo(() => {
    return products
      .map((product) => ({
        name: product.title.length > 15 ? product.title.substring(0, 15) + '...' : product.title,
        sold: product.sold,
        stock: product.stock,
        revenue: product.price * product.sold
      }))
      .sort((a, b) => b.sold - a.sold)
      .slice(0, 10);
  }, [products]);

  const pieData = useMemo(() => {
    return products
      .map((product) => ({
        name: product.title.length > 20 ? product.title.substring(0, 20) + '...' : product.title,
        value: product.sold,
        stock: product.stock
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 6);
  }, [products]);

  const totalSold = useMemo(() => {
    return products.reduce((sum, product) => sum + product.sold, 0);
  }, [products]);

  const totalRevenue = useMemo(() => {
    return products.reduce((sum, product) => sum + product.price * product.sold, 0);
  }, [products]);

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
            <div className="total__item">{products.length}</div>
            <div className="total__content">
              {/* <h2 className="total__title">Total products</h2> */}
              <h2 className="total__price">{totalSold.toLocaleString()} sold</h2>
              <h4 className="total__procent">${totalRevenue.toLocaleString()} revenue</h4>
            </div>
          </div>
          <div className="sold analitic">
            <h4 className="chart__title">Top Products by Sales</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} fontSize={12} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sold" fill="#8884d8" name="Sold" />
                <Bar dataKey="stock" fill="#82ca9d" name="Stock" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="diagram analitic">
            <h4 className="chart__title">Sales Distribution</h4>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
});
