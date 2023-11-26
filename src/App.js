import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super();
    //Implementation of state object
    this.state = {
      fullName: "Arobani Sunday Oluwasola ",
      bio: " Bsc Counselling Psychology UI",
      imgSrc:
        "https://gomycodelearndev.blob.core.windows.net/profiles/4f143533-99c4-4b65-92bd-ea66e3c1e273-133418423203489934.png",
      profession: "Full Stack Software Developer",
      show: true,
      count: 0,
    };
  }

  //Function for count increamentation and show checks and update
  increamentCount = () => {
    if (this.state.show === true) {
      this.setState({
        count: this.state.count + 1,
        show: this.state.show = false
      })
    } else {
      this.setState({
        show: this.state.show = true
      })
    }
  }
  render() {
    return (
      <div className='container pt-5'>
        {/* Condition that checks and displays details accordingly */}
        {this.state.show ? <Card style={{ width: '18rem' }}>
          <Card.Img width={300} height={350} variant="top" src={this.state.imgSrc} />
          <Card.Body>
            <Card.Title>{this.state.fullName}</Card.Title>
            <Card.Text>
              {this.state.bio}
            </Card.Text>
            <Card.Text>
              {this.state.profession}
            </Card.Text>
          </Card.Body>
        </Card> : <h1>Nothing to show</h1>}
        {/* button that toggles between show  */}
        <Button className='mt-3' onClick={this.increamentCount} variant="primary">Toggle View {this.state.count}</Button>
      </div>
    )
  }
}

export default App
