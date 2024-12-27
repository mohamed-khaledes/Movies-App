import { Navbar,Container,Nav,Form } from 'react-bootstrap'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getMovies,moviesSearch } from '../Redux/Redux-toolkit/Slices/moviesSlice'
import { getTrendMovies,trendSearch } from '../Redux/Redux-toolkit/Slices/trendSlice'
import { getNowPlaying,nowPlayingSearch } from '../Redux/Redux-toolkit/Slices/nowPlayingSlice'
const NavBar = ({homeActive,moviesActive,nowActive,trendActive}) => {
  const dispatch = useDispatch()
  // function for get a data we  search about 
  const getData =async()=>{
    await dispatch(getMovies())
      await dispatch(getTrendMovies())
      await dispatch(getNowPlaying())
  }
  const getSearchData = async(searchWord)=>{
    await dispatch(moviesSearch(searchWord))
    await dispatch(trendSearch(searchWord))
    await dispatch(nowPlayingSearch(searchWord))
  }
  const onSearch = async(searchWord)=>{
    if(searchWord === ""){
      getData()
    }else{
      getSearchData(searchWord)
    }
  }

  return (
    <div>
        <Navbar className='navbar' expand="lg" variant='dark' >
      <Container fluid>
        <Navbar.Brand>
        <div className='logo'><img src={logo} alt="logo-img"></img></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='link' to="/" >
            <nav   className={`nav-item ${homeActive}`} >الرئيسيه</nav>
            </Link>
            <Link className='link' to="/moviesPage" >
            <nav className={`nav-item ${moviesActive}`} >الافلام</nav>
            </Link>
            <Link className='link' to="/nowPlayingPage" >
            <nav className={`nav-item ${nowActive}`}  >يعرض الان</nav>
            </Link>
            <Link className='link' to="/trendingPage" >
            <nav className={`nav-item ${trendActive}`}  >الشائع</nav>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="ابحث"
              className="me-2"
              aria-label="Search"
              data-testid="search-input"
              onChange={(e)=>onSearch(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default NavBar