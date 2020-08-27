import React, { Component } from 'react';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Particles from 'react-particles-js';
import { MetroSpinner } from "react-spinners-kit";

const part_options =
{
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const intialState = {
  algo: 'Content Based Filtering',
  finalUsername: 'Draco Malfoy',
  loading: false,
  result: '',
  error: false,
  errorMsg: '',
}
class App extends Component {
  constructor() {
    super();
    this.state = intialState;
  }

  onUserChange = (event) => {
    this.setState({ finalUsername: event.target.value });
    console.log(this.state);
  }

  onAlgoChange = (event) => {
    this.setState({ algo: event.target.value });
  }

  onButtonSubmit = () => {
      console.log("~~~~~~~~~")
      fetch(`http://127.0.0.1:5000/api/recommendations?name=${this.state.finalUsername}&algo=${this.state.algo}`, { //expect 4 back, take in first and last name
        method: 'GET',
        // headers: { 'Content-Type': 'application/json' },
        // redirect: '*follow, error',
        // referrerPolicy: 'no-referrer'
      }).then(response => response.json())
        .then((response) => {
          console.log(response);
          if (response != null) {
            if (response.result.length < 1) {
              this.setState({
                error: true,
                loading: false,
                finalUsername: intialState.finalUsername,
                result: ''
              })
            }
            this.setState({
              loading: false,
              result: response.result
            })
          }
        }).catch(() => {
          console.log("EEEEE");

          this.setState({
            errorMsg: 'notfound',
            error: true,
            loading: intialState.loading,
            finalUsername: intialState.finalUsername,
            images: intialState.images
          })
        })
    
  }

  render() {
    return (

      <div className="App">

        <Particles className='particles'
          params={part_options}
        />
        <div>
          <ImageLinkForm onAlgoChange={this.onAlgoChange} onUserChange={this.onUserChange} onButtonSubmit={this.onButtonSubmit} />
          <div id="inner">
            <MetroSpinner
              size={150}
              loading={this.state.loading}
            />
          </div>
    {/* {this.state.result[0].map((item,i)=><h1>{item}</h1>)} */}
    <h1>{this.state.result[0]}</h1>
    <h1>{this.state.result[1]}</h1>
    <h1>{this.state.result[2]}</h1>

        </div>
      </div>
    );
  }
}

export default App;
