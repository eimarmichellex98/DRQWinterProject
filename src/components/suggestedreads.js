import React from 'react';
import { Button } from 'react-bootstrap';//will allow user to switch components but also disable button when on named page
import {Accordion} from 'react-bootstrap';//used to list different sites to the user, in a cleaner manner by using accordion
import {Card} from 'react-bootstrap';//listing sites to user and links given

//export class to be used in App
export class Suggest extends React.Component{

render(){
    return(
        <div>
            <br></br>
            <h1>Somewhere to start</h1>
            <br></br>
            <Button href="/" variant="success" size="lg">Home</Button>{' '}
            <Button href="/suggest" variant="warning" size="lg" disabled>Suggestions</Button>{' '}
            <Button href="/current" variant="danger" size="lg">Reading List</Button>{' '}
            <Button href="/genre" variant="info" size="lg">Genres</Button>{' '}
            <br></br>
            <br></br>
            <h5>A fellow bookworm might enjoy these</h5>
            <br></br>
            <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Click here to visit the magical school of Hogwarts!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body><a href="https://www.wizardingworld.com/">Hogwarts through here</a></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Join others from all across the world to discuss books and more!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body><a href="https://www.reddit.com/r/bookdiscussion/">Reddit is this way</a></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    If you enjoy fanmade novels, click here!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body><a href="https://www.wattpad.com/">Join Wattpad,read, write and more</a></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                   Want books at good prices, look no further!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body><a href="https://www.bookdepository.com/">Visit BookDepository here</a></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                   Ready to test your book knowledge?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body><a href="https://www.allthetests.com/tests-for-the-real-fan/books-quizzes/index.php?katb=146#:~:text=%20Fan%20-%C2%BB%20Books%20quizzes%20%201%20Harry,5%20Warrior%20Cats%20%2F%20Warriors.%20%20More%20">
                Check out all these quizzes!</a></Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </div>
    );
}
}