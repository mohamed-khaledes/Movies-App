import './App.css';
import HomePageC from './Pages/HomePageC';
import TrendingPage from './Pages/TrendingPage';
// import react router
import { HashRouter as Router, Route,Routes } from 'react-router-dom';
import MoviesPage from './Pages/MoviesPage';
import MovieDetails from './Components/MovieDetails';
import MovieWatch from './Components/MovieWatch';
import NowPlayingPage from './Pages/NowPlayingPage';

function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<HomePageC />} />
        <Route path='/moviesPage' element={<MoviesPage />} />
        <Route path='/nowPlayingPage' element={<NowPlayingPage />} />
        <Route path='/trendingPage' element={<TrendingPage />}/>
        <Route path="/movieDetails/:id" element={<MovieDetails />}/>
        <Route path="/movieWatch" element={<MovieWatch />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
