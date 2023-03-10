import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MealDetails from './components/MealDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            {/* Exact: Route if only "/", not if "/" part of url */}
            <Route exact path="/" element={< Home />} />
            <Route path="/create" element={< Create />} />
            <Route path="/meals/:id" element={< MealDetails />} />
            <Route path="*" element={< NotFound />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
