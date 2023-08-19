import './App.css';
import Header from './Header/header';
import Container from './Container/container';

import MostPopular from './most popular/most-popular';
import GamingLibrary from './GamingLibrary/GamingLibrary';
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return(
    <div className='container app'>
      <Router>

    <Header />
    <Container >
      <Routes basename="/Cyborg-React-Project1">
        <Route path='/Home' element={<Home/>}/>
       <Route path='/MostPopular' element={<MostPopular/>}/>
        <Route path='/GamingLibrary' element={<GamingLibrary />}/>
     </Routes>

     </Container>
     <Footer />

     </Router>
    </div>
  )
}

export default App;
