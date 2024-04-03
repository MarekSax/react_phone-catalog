import { Outlet } from 'react-router-dom';
import 'the-new-css-reset/css/reset.css';
import './App.scss';

export const App = () => (
  <div className="App">
    <h1>Product Catalog</h1>
    <Outlet />
  </div>
);
