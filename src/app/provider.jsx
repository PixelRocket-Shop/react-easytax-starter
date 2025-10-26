import { RouterProvider } from 'react-router-dom';
import ErrorBoundary from '@components/common/error-boundary';
import { router } from './router';

export function AppProvider() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}