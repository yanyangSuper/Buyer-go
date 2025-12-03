import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes/index.ts';
// import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App />
     */}
    <RouterProvider router={router} />
  </StrictMode>
);
