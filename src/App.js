import { useState } from 'react';
import './App.scss';
import CarouselClass from './components/CarouselClass';
import CarouselFunc from './components/CarouselFunc';

const pictures = [
  '/img/skyrim/1.jpg',
  '/img/skyrim/2.jpg',
  '/img/skyrim/3.jpg',
  '/img/skyrim/4.jpg',
]

const pictures2 = [
  '/img/skyrim/5.jpg',
  '/img/skyrim/6.jpg',
  '/img/skyrim/7.jpg',
  '/img/skyrim/8.jpg',
]

function App() {
  const [ show, setShow ] = useState(true);
  const [ login, setLogin ] = useState(false);
  const [ time, setTime ] = useState(3000);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show / hide</button><br/>
      <button onClick={() => setLogin(!login)}>Login / logout</button>
      <input 
        type='number' 
        onInput={(event) => setTime(event.currentTarget.value)}
        value={time}
      />
      {
        show ? <CarouselFunc
        pictures={ login ? pictures2 : pictures}
        time={time}
        /> : null
      }
    </div>
  );
}

export default App;
