import Header from './components/header/header';
import MainPages from './pages/mainPages/mainPages';
import data from './data.json';
import TimerCard from './components/ui/card/timerCard/timerCard';


function App() {
  return (
    <>
      <Header />
      <MainPages />
      {data.map((item) => (
       <TimerCard key={item.src} data={item}/> 
      ))}
    </>
  );
}

export default App;
