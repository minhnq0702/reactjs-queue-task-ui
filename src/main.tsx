import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './main.css';
import store from './models/store.ts';
import AppRouter from './routes/index.tsx';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <main className="dark text-foreground bg-background w-screen h-screen">
          <RouterProvider router={AppRouter} />
        </main>
      </Provider>
    </NextUIProvider>
  </React.StrictMode>,
);
