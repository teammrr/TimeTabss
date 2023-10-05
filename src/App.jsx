import './index.css';
import { Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom'; 
import HomePage from './components/HomePage';
import Year10 from './components/years/Year10';
import Year11 from './components/years/Year11';
import Year12 from './components/years/Year12';
import Year13 from './components/years/Year13';
import YearList from './components/years/YearList';
// import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";



function App() {
  return(
      <Router>
        {/* <BubblyContainer /> */}
          <nav className='pt-4 pl-4'>
          <Link to="/years"> <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
    </Link>
          {/* <Link to="years">Year 10</Link> */}
      </nav>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/years' element={<YearList/>} >
              <Route path='y10' element={<Year10/>}>
                <Route path=':roomId' element={<Year10/>} />
                </Route>  
              <Route path='y11' element={<Year11/>} >
                <Route path=':roomId' element={<Year11/>} />
                </Route>
              <Route path='y12' element={<Year12/>} >
                <Route path=':roomId' element={<Year12/>} />
                </Route>
              <Route path='y13' element={<Year13/>} >
                <Route path=':roomId' element={<Year13/>} />
                </Route>
          </Route>
      </Routes>
      </Router>
  )
}

export default App;
