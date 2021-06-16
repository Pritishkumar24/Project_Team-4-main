import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header-color">
                <Navbar bg="dark" expand="lg" className = "p-4" >   
                    <Navbar.Brand href="#home">
                        <img
                        alt=" logo "
                        src="https://www.pinclipart.com/picdir/big/345-3457898_totalcard-bookstore-all-time-conspiracies-logo-clipart.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top headerLogo"
                        />{' '}
                        <p className="headerName">BOOK STORE</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Form inline>
                            <FormControl type="text" placeholder="Search by Bookname" className="headerSearchBar" />
                            <Button className="headerSearchButton"><i class="fa fa-search"></i></Button>
                        </Form>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="justify-content-end headerButtons">
                        <Nav.Link href="#login"><Button variant="outline-success">Login</Button></Nav.Link>
                        <Nav.Link href="#signup"><Button variant="outline-danger">Sign Up</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
             </div>
        )
    }
}