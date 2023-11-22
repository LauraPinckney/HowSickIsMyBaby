import styles from './App.module.scss';
import { Home } from './pages/Home/Home';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Questions } from './pages/Questions/Questions';
import { Result } from './pages/Result/Result';
import { Footer } from './components';

export const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
