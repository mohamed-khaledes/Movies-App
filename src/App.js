import './App.css';
import axios from 'axios'
import { useEffect,useState } from 'react';
import HomePageC from './Pages/HomePageC';
import TrendingPage from './Pages/TrendingPage';
// import react router
import { HashRouter as Router, Route,Routes } from 'react-router-dom';
import MoviesPage from './Pages/MoviesPage';
import MovieDetails from './Components/MovieDetails';
import MovieWatch from './Components/MovieWatch';
import NowPlayingPage from './Pages/NowPlayingPage';

function App() {
  const [movies,setMovies] = useState([]);
  const [trend,setTrend] = useState([]);
  const [pageCount,setPageCount] = useState(0);
  const [nowPlaying,setNowPlaying] = useState([])
  // get all movies from api using react axios
  const getAllMovies = async()=>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=1")
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }
   // get other page using react axios
   const getPage = async(pageIndex)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=${pageIndex}`)
    setMovies(res.data.results)
  }
  // get all trending
  const getAllTrending = async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=1`)
    setTrend(res.data.results)
    setPageCount(res.data.total_pages)
  }
  // get the other page of trending movies
  const getPageTrending = async(pageIndex)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=216d86a877a94fc074ae88c2c289a858&language=ar-EG&page=${pageIndex}`)
    setTrend(res.data.results)
  }
  // get all movies playing now
  const moviesPlayingNow = async()=>{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=216d86a877a94fc074ae88c2c289a858&language=en-US&page=1`)
      setNowPlaying(res.data.results)
    }
  // get all movies playing now
  const getPageMoviesPlayingNow = async(pageIndex)=>{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=216d86a877a94fc074ae88c2c289a858&language=en-US&page=${pageIndex}`)
      setNowPlaying(res.data.results)
    }
   // function for get a data we  search about 
   const search = async(searchWord)=>{
    if(searchWord === ""){
      getAllMovies()
      getAllTrending()
      moviesPlayingNow()
    }else{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=216d86a877a94fc074ae88c2c289a858&query=${searchWord}&language=en-US&page=1&include_adult=false`)
      setMovies(res.data.results)
      setNowPlaying(res.data.results)
      setTrend(res.data.results)
    }
  }
  // i used useEffect to get the all movies with first render of app
  useEffect(()=>{
    getAllMovies()
    getAllTrending()
    moviesPlayingNow()
  },[])
  
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<HomePageC movies={movies} getPage={getPage} pageCount={pageCount} search={search}/>} />
        <Route path='/moviesPage' element={<MoviesPage movies={movies} pageCount={pageCount} getPage={getPage} search={search}/>} />
        <Route path='/nowPlayingPage' element={<NowPlayingPage nowPlaying={nowPlaying} pageCount={pageCount} getPageMoviesPlayingNow={getPageMoviesPlayingNow} search={search}/>} />
        <Route path='/trendingPage' element={<TrendingPage trend={trend} getPageTrending={getPageTrending} pageCount={pageCount} search={search}/>}/>
        <Route path="/movieDetails/:id" element={<MovieDetails />}/>
        <Route path="/movieWatch" element={<MovieWatch />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
