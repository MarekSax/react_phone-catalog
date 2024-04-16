import { Outlet } from 'react-router-dom';
import 'the-new-css-reset/css/reset.css';
import './App.scss';
import { Header } from './modules/shared/Header';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
