import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './main.css';
import { store } from './models/store.ts';
import AppRouter from './routes/index.tsx';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
  <StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <Toaster position="top-right" richColors closeButton />
        <main className="dark text-foreground bg-background w-screen h-screen">
          <RouterProvider router={AppRouter} />
        </main>
      </Provider>
    </NextUIProvider>
  </StrictMode>,
);
