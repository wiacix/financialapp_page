import { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
