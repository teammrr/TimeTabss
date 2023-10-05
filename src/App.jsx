import './index.css';
import { Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom'; 
import HomePage from './components/HomePage';
import Year10 from './components/years/Year10';
import Year11 from './components/years/Year11';
import Year12 from './components/years/Year12';
import Year13 from './components/years/Year13';
import Years from './components/years/Years';


function App() {
  return(
      <Router>
          <nav className='text-md text-[#032654] font-semibold text-center space-x-10 p-4'>
          <Link to="/"> Home</Link>
          {/* <Link to="years">Year 10</Link> */}
      </nav>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/years' element={<Years/>} >
              <Route path='y10' element={<Year10/>} />
              <Route path='y11' element={<Year11/>} />
              <Route path='y12' element={<Year12/>} />
              <Route path='y13' element={<Year13/>} />
          </Route>
      </Routes>
      </Router>
  )
}

export default App;
