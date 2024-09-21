import { createRoot } from 'react-dom/client';
import { Root } from './Root.tsx';
import './styles/main.scss';

createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
