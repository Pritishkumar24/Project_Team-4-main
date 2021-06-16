import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import fiction2  from "../images/nonfic3.JPG"
import {Link} from "react-router-dom";

export default class SecondHeader extends Component {

    constructor(){
        super();
        this.state = {newrelease : [], isnewrelease : false}
    }


    Newrelease(){
        fetch('http://localhost:4000'+'/books/?sort=-date',{
            headers:{'content-type': 'application/json'},
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({newrelease : data.data, isnewrelease : true})
        });
        console.log("alldeals",this.state.newrelease)
    }

    render() {
        var displaydata;
        if(this.state.isnewrelease){
            displaydata = this.state.newrelease.map((books, i)=>{
                if(i < 4){
                return(
                    <div className="col-4 col-sm-4 col-md-3 col-xl-3" key={i}>
                      
                            <Card className="border-0">
                            <Card.Img variant="top" src={fiction2}  height="250px"/>
                            <Card.Body className="text-center">
                                <Card.Title className="text-primary"><b>{books.title}</b></Card.Title>
                                <Card.Text >
                                    <p className="card-text text-info"><b>Price @ ₹{books.price}</b></p>
                                    <p className="card-text text-success"><b>Date {books.date.toLocaleString()} </b></p>
                                </Card.Text>
                           </Card.Body>
                          </Card>
    
                    </div>
                )
                }
            })
        }
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light p-3">

                <div id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Button variant="outline-primary border-0"> All </Button>
                        <Button variant="outline-primary border-0"> Today Deals</Button>
                        <Button variant="outline-primary border-0" onClick={this.Newrelease.bind(this)} >New Releases</Button>
                        <Button variant="outline-primary border-0" >Popular Booksk</Button>
                    </ul>
                </div>

                </nav>

                <Container>
                <div className="row">
                    {displaydata} 
                </div>
                </Container>
            </>
        )
    }
}