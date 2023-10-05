import { useParams, Link, Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom'; 
import HomePage from './components/HomePage';
import YearHome from './YearHome';
import YearSchedule from './YearSchedule';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && (
        <nav className='pt-4 pl-4'>
          <Link to="/years">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </Link>
        </nav>
      )}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/years/*' element={<YearHome />} />
        <Route path='/years/year/:yearId' element={<YearSchedule />} />
      </Routes>
    </>
  );
}

export default App;