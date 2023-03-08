import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const title = "Blog app"
  const likes = 50

  const url = "http://www.google.com"

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
