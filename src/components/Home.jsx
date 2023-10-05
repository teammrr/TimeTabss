import React from 'react';
// import Nav from './Nav';
import { Link, Routes, Route, Router} from 'react-router-dom';
import HomePage from './HomePage';

import Year10 from './years/Year10';
import Year11 from './years/Year11';
import Year12 from './years/Year12';
import Year13 from './years/Year13';
import YearList from './years/YearList';

function Home() {
    return(
        <Router>
            <nav className='text-md text-[#032654] font-semibold text-center space-x-10 p-4'>
            <Link to="/">Home</Link>
            <Link to="years">Year 10</Link>
        </nav>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/years' element={<YearList/>} >
                <Route path='y10' element={<Year10/>} />
                <Route path='y11' element={<Year11/>} />
                <Route path='y12' element={<Year12/>} />
                <Route path='y13' element={<Year13/>} />
            </Route>
        </Routes>
        </Router>
    )
}

export default Home