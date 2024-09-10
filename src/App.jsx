import { useState } from 'react';
import Header from './components/header/header';
import MainPages from './pages/mainPages/mainPages';
import NotFound from './pages/notFound/notFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchVavue, setSearchValue] = useState('');
  const handleSearchVavue = (item) => setSearchValue(item);
  console.log(searchVavue + '   fsdf')
  return (
    <>
      <Header searchVavue={searchVavue} handleSearchVavue={handleSearchVavue}/>
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
