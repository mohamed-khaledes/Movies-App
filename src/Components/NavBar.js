import { Navbar,Container,Nav,Form } from 'react-bootstrap'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom'
const NavBar = ({search,homeActive,moviesActive,nowActive,trendActive}) => {
  // const [active,setActive] = useState(1)
  // toggle active class between nav links
  // const toggleActive = (index) =>{
  //   setActive(index)
  // }
  // onClick={()=>toggleActive(1)}  className={active === 1?'nav-item active-class':"nav-item"}
  const onSearch =(searchWord)=>{
    search(searchWord)
  }
  return (
    <div>
        <Navbar className='navbar' expand="lg" variant='dark' >
      <Container fluid>
        <Navbar.Brand href="#">
        <div className='logo'><img src={logo} alt="logo-img"></img></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='link' to="/">
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