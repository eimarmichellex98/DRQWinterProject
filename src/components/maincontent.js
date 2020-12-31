import React from 'react';
import { Button } from 'react-bootstrap';//will allow user to switch components but also disable button when on named page
import { Form } from 'react-bootstrap';//Form to create an account on app

//export class to be used in App
export class MainContent extends React.Component{

render(){
    return(
        <div>
            <br></br>
            <h1>Hello there, welcome to your library</h1>
            <h3>A collection of all your favourites in one place</h3>
            <br></br>
            <Button href="/" variant="success" size="lg" disabled>Home</Button>{' '}
            <Button href="/suggest" variant="warning" size="lg">Suggestions</Button>{' '}
            <Button href="/current" variant="danger" size="lg">Reading List</Button>{' '}
            <Button href="/genre" variant="info" size="lg">Genre</Button>{' '}
            <br></br>

            <br></br>
            <img src="https://ptbook.liverpool.ac.uk/imgs/Book_Footer_Web.png" height="90" ></img>
            <br></br>
            <br></br>
            <br></br>
            <h4>Sign up to get started!</h4>
            

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
}