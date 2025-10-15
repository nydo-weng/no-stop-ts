import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';

import router from '@/router';

// 这里这个 #root, 高度是 100% of viewport
createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
