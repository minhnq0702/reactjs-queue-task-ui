import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './main.css';
import { store, useAppDispath } from './models/store.ts';
import AppRouter from './routes/index.tsx';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import { actions } from './models/slices/SliceUser.ts';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
export const MainApp = () => {
  const dispath = useAppDispath();
  void dispath(actions.CHECK_LOGGED_STATE());
  return (
    <NextUIProvider>
      <Toaster position="top-right" richColors closeButton />
      <main className="dark text-foreground bg-background w-screen h-screen">
        <RouterProvider router={AppRouter} />
      </main>
    </NextUIProvider>
  );
};

root.render(
  <StrictMode>
    <Provider store={store}>
      <MainApp />
    </Provider>
  </StrictMode>,
);
