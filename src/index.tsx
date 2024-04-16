import { createRoot } from 'react-dom/client';
import { App } from './App';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Paths } from './types/Paths';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonesPage';
import { TabletsPage } from './modules/TabletsPage';
import { AccessoriesPage } from './modules/AccessoriesPage';

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
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <RouterProvider router={router} />,
);
