import { createBrowserRouter } from 'react-router';

import Home from '@/pages/Home';
import Manage from '@/pages/Manage';
import Setting from '@/pages/Setting';
import Layout from '@/pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // 默认路由
        index: true,
        element: <Home />,
      },
      {
        path: '/manage',
        element: <Manage />,
      },
      {
        path: '/setting',
        element: <Setting />,
      },
    ],
  },
]);

export default router;
