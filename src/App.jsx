import Header from './components/header/header';
import MainPages from './pages/mainPages/mainPages';
import data from './data.json';
import TimeMain from './components/ui/card/mainCard/mainCard';


function App() {
  return (
    <>
      <Header />
      <MainPages />
      {data.map((item) => (
       <TimeMain key={item.src} data={item}/> 
      ))}
    </>
  );
}

export default App;
