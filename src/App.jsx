import styles from './App.module.scss';
import { Home } from './pages/Home/Home';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      THIS IS SOME TEXT
      <navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
