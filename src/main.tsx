import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './main.css';
import AppRouter from './routes/index.tsx';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background w-screen h-screen">
        <RouterProvider router={AppRouter} />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
);
