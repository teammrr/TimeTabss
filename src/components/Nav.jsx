import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

function Nav(){
    return (
        <nav >
            <Link to="/">Home</Link>
            <Link to="/y10">Year 10</Link>
            <Link to="/y11">Year 11</Link>
            <Link to="/y12">Year 12</Link>
            <Link to="/y13">Year 13</Link>
        </nav>
    )
}

export default Nav