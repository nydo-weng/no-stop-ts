import { createBrowserRouter } from 'react-router';

import Manage from '@/pages/Manage';
import Setting from '@/pages/Setting';
import Layout from '@/pages/Layout';
import Practice from '@/pages/Practice';

const router = createBrowserRouter([
  {
    // 一级路由, 现在直接挂载到 #root
    path: '/',
    element: <Layout />,
    children: [
      {
        // 默认路由
        path: '/practice',
        element: <Practice />,
      },
      {
        index: true,
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
