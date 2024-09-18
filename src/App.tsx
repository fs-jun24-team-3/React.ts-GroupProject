import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default App;
