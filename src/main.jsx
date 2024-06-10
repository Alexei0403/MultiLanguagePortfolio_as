import * as ReactDom from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

ReactDom.createRoot(rootElement).render(<App />);