import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Footer from './components/Footer';
import Main from './components/Main';
import Contactus from './pages/Contactus';
import Slider from './components/Slider';
import {BrowserRouter as Router ,Switch,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
    
      <Header className="head" />
      <Header2/>
      <Slider/>
      

      <Routes>
      
      <Route path='/' element={<Main/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      
      </Routes>
      <Footer />
    
     
      
     
      

      
    </div>
    </Router>
  );
}

export default App;
