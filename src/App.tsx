import './styles.css';
import { Base } from './components/Base/base.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Base />
    </QueryClientProvider>
  );
};
