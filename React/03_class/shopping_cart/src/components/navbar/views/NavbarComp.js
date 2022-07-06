import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import '../styles/Navbar.css';

const NavbarComp = () => {
     const { cartProducts } = useSelector((state) => state.cart);
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container
        fluid
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Navbar.Brand>Shoppy</Navbar.Brand>
        <div
          style={{
            display: "flex",
            width: "450px",
            justifyContent: "space-between",
            marginRight: '20px'
          }}
        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div>
               <FontAwesomeIcon
               style={{ width: "40px", height: "40px", color: 'blue' }}
               icon={faCartShopping}
               />
               <span className="cart-count">{cartProducts.length}</span>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
