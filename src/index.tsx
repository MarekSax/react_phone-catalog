import { createRoot } from 'react-dom/client';
import { App } from './App';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Paths } from './types/Paths';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonesPage';
import { TabletsPage } from './modules/TabletsPage';
import { AccessoriesPage } from './modules/AccessoriesPage';
import { CartPage } from './modules/CartPage';
import { FavoritesPage } from './modules/FavoritesPage';

const router = createHashRouter([
  {
    path: Paths.home,
    element: <App />,
    children: [
      {
        path: Paths.home,
        element: <HomePage />,
      },
      {
        path: Paths.phones,
        element: <PhonesPage />,
      },
      {
        path: Paths.tablets,
        element: <TabletsPage />,
      },
      {
        path: Paths.accessories,
        element: <AccessoriesPage />,
      },
      {
        path: Paths.cart,
        element: <CartPage />,
      },
      {
        path: Paths.favorites,
        element: <FavoritesPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <RouterProvider router={router} />,
);
