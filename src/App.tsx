import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import NavSecondary from './components/NavSecondary';
import HomeSlider from './components/HomeSlider';
import Body from './components/Body';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <NavSecondary />
        <HomeSlider />
        <Body />
      </BrowserRouter>
    </>
  )
}

export default App
