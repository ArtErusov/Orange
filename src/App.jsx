import Header from './components/header/header';
import MainPages from './pages/mainPages/mainPages';
import NotFound from './pages/notFound/notFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
