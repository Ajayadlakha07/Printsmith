import './App.css';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import Covid from './pages/Covid';
import Footer from './components/Footer';
import About from './pages/About';
import Ourservices from './pages/Ourservices';
import Contactus from './pages/Contactus';
import Casestudy from './pages/Casestudy';
import Commercial from './pages/Commercial';
import img1 from './assets/CP1-3.png'
import img2 from './assets/packaging-printing.png'
import img3 from './assets/Retail.png'
import {table1,table1_li,table1_head,table2, table2_li,table2_head, table3, table3_li, table3_head} from './pages/content'


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            {/* <Route path='/' element={<Home/>} /> */}
            <Route path='/' element={</>} />
            <Route path='/case-studies' element={<Casestudy/>} />
            <Route path='/commercial-printing' element={<Commercial img1={img1} table1={table1} table1_head={table1_head} table1_li={table1_li}  />} />
            <Route path='/packaging-printing' element={<Commercial img1={img2} table1={table2} table1_head={table2_head} table1_li={table2_li} />} />
            <Route path='/pos' element={<Commercial table1={table3} img1={img3} table1_head={table3_head} table1_li={table3_li} />} />

            <Route path='/covid' element={<Covid/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/Our-services' element={<Ourservices/>} />
            <Route path='/Contact-us' element={<Contactus/>} />
        </Routes>
        <Footer/>
      
    </div>
  );
}

export default App;
