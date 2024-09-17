import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { TabletsPage } from './pages/TabletspPage/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CartPage } from './pages/CartPage/CartPage';
import { MainPage } from './pages/MainPage';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/phones/:phoneId" element={<PhonesPage />} />
        <Route path="/tablets" element={<TabletsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="/" element={<App />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
