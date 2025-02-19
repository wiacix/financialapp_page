import { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';

function App() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
