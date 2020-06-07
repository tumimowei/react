import React from 'react';
import logo from './logo.svg';
import './App.css';
import MouseTracker from './hook/useEffect'
import useMousePosition from './hook/useMousePosition'
import useURLloader from './hook/useURLLoader'
import SetTimeoutEffect from './hook/setTimeouteffect';
import Counter from './hook/connumber'
interface IShowResult{
  message:string,
  status:string
}
const App: React.FC = () => {
  // const positions = useMousePosition();
  const [data,loading] = useURLloader('https://dog.ceo/api/breeds/image/random');
  const resultData  = data as IShowResult;
  // console.log('zzzzz',positions);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter value={1} onChange={} /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SetTimeoutEffect />
        {
          loading ? <p>狗狗正在加载</p> :
          <img src={resultData && resultData.message} />
        }
        {/* <MouseTracker />
        <div>x:{positions.x} y:{positions.y}</div> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
