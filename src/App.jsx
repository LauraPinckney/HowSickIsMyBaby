import styles from './App.module.scss';
import { Home } from './pages/Home/Home';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
