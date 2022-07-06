import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleArrowLeft,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { filterData, setProducts } from "../../Products/action-creator";

const NavbarComp = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const location = useLocation();

  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
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
            width: "600px",
            justifyContent: "space-between",
            marginRight: "20px",
          }}
        >
          {location.pathname === "/" ? (
            <>
              <Link to="wishlist">
                <Button
                  variant="contained"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    width: "137px",
                    color: "#D82E2F",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faHeartCircleCheck}
                    style={{ width: "30px", height: "30px" }}
                  />
                  Wishlist
                </Button>
              </Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(event) => {
                    if (event.target.value === "ENTER" && searchValue.length) {
                      dispatch(filterData(searchValue));
                    }
                    setSearchValue(event.target.value);
                  }}
                />
                <Button
                  onClick={(event) => {
                    event.preventDefault();
                    if (searchValue.length) {
                      dispatch(filterData(searchValue));
                    }else{
                         dispatch(setProducts());
                    }
                  }}
                  variant="outline-success"
                >
                  Search
                </Button>
              </Form>
              <Link to="/cart">
                <FontAwesomeIcon
                  style={{ width: "40px", height: "40px", color: "blue" }}
                  icon={faCartShopping}
                />
                {cartProducts.length > 0 && (
                  <span className="cart-count">{cartProducts.length}</span>
                )}
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <Button
                  variant="contained"
                  style={{ fontSize: "20px", fontWeight: "bolder" }}
                >
                  <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    style={{ width: "30px", height: "30px" }}
                  />
                  Go back
                </Button>
              </Link>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
