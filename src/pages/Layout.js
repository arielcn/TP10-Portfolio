import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from "@mui/material";
import { useContext } from "react";
import { FavoritoContext } from "../context/favoritoContext";

const Layout = () => {
    const {favorito} = useContext(FavoritoContext);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <h1>Mi Portfolio</h1>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/mis-creaciones">Mis Creaciones</Nav.Link>
                        </Nav>
                        <Nav.Link as={Link} to="/favorito" className="float-end">
                            <Badge badgeContent={favorito.length} color="primary">
                                <ion-icon name="star-outline" size='large'></ion-icon>
                            </Badge>
                            </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>

    );
};

export default Layout;