import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import HelloWorld from 'src/components/HelloWorld';
import './index.scss';

// render the main app
const appQueryClient = new QueryClient();

ReactDOM.render(
  //@ts-ignore
  <QueryClientProvider client={appQueryClient}>
    <HelloWorld name='Sy' />
  </QueryClientProvider>,
  document.querySelector('#root'),
);
