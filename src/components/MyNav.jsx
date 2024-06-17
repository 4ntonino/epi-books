import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar  } from 'react-bootstrap';
import SearchBook from './SearchBook';
import { AuthContext, ThemeContext } from '../modules/Contexts';
import { Link } from 'react-router-dom';

export default function MyNav({search, handleSearch}) {

  let [themeCtx, setThemeCtx] = useContext(ThemeContext);
  let [authUserCtx] = useContext(AuthContext);

  return (
    <Navbar expand="lg" className="bg-body-primary" bg={themeCtx} data-bs-theme={themeCtx}>
      <Container>
      <Link to="/">
        <Navbar.Brand>EpiBooks</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
          </Nav>
        </Navbar.Collapse>
        <SearchBook search={search} handleSearch={handleSearch} />
        <Navbar.Text className={themeCtx + "btn" +  " mx-4" }>
            Signed in as: <a href="/">{authUserCtx}</a>
          </Navbar.Text>
          <Button variant="dark" onClick={() => {
            themeCtx === 'light' ? setThemeCtx('dark') : setThemeCtx('light')
          }}> {themeCtx === 'light' ? "tema scuro ": "tema chiaro"}</Button>
          
      </Container>
    </Navbar>
  )
}
