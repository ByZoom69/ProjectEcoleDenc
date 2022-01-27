import "../css/list_items.css";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function Nav() {
    const navbarvar = 
    <Navbar>
        <Container>
            <Navbar.Brand id="brand" href="#home">Clock.</Navbar.Brand>
            <Navbar.Toggle />
        </Container>
    </Navbar>;      
       
    return (
        <div>{navbarvar}</div>
    )
  }

export default Nav;