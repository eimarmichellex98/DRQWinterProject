//created to have another component passing items through singularly
import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class CreateList extends React.Component{

    //constructor used to create card object and super class
    //asking user to enter the following to upload what they have read
    //binding
    constructor(props){
        //use card we need super class to invoke parent class
        super(props);

        this.RemoveBook = this.RemoveBook.bind(this);

        //fields we are taking in
        this.state ={
            Book:'',
            Author:'',
            Genre:''
        }
    }
    //remove book from library
    RemoveBook(e){
        e.preventDefault();
        console.log("Remove: " + this.props.book._id);
        axios.delete("http://localhost:4000/api/books/" + this.props.book._id)
        .then(()=>{
            this.props.reloadMethod();
        })
        .catch();
    }
    //displaying books using Card
    render(){
        return(
            <div> 
                <br></br>
            <div>
                <Card className="text-center">
                    <Card.Header>{this.props.book.Genre}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.book.Book}</Card.Title>
                        <Card.Text>
                            {this.props.book.Author}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="dark" onClick={this.RemoveBook}>Remove Book</Button>
                </Card>
            </div>
            </div>
        );
    }
}