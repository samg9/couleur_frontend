import React, { Component } from 'react';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ProfileGrid from './components/ProfileGrid/ProfileGrid';
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
  input: '',
  paletteSize: 6,
  imageUrl: '',
  finalUsername: '',
  images: [],
  route: 'signin',
  isSignedIn: true,
  loading: false,
  error: false,
  errorMsg: '',
}
class App extends Component {
  constructor() {
    super();
    this.state = intialState;
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onPaletteSizeChange = (event) => {
    this.setState({ paletteSize: event.target.value });
  }

  onButtonSubmit = () => {
    if (this.state.input !== '') {
      this.setState({
        loading: true,
        finalUsername: intialState.finalUsername,
        images: intialState.images,
        error: false,
      })
      fetch(`https://couleur-be.herokuapp.com/api/palettes?user=${this.state.input}&pal_size=${this.state.paletteSize}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json())
        .then((response) => {
          if (response != null) {
            if (response.result.length < 1) {
              this.setState({
                errorMsg: 'privateAccount',
                error: true,
                loading: false,
                finalUsername: intialState.finalUsername,
                images: intialState.images
              })
            }
            this.setState({
              loading: false,
              finalUsername: this.state.input,
              images: response.result
            })
          }
        }).catch(() => {
          this.setState({
            errorMsg: 'notfound',
            error: true,
            loading: intialState.loading,
            finalUsername: intialState.finalUsername,
            images: intialState.images
          })
        })
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(intialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  }

  render() {
    return (

      <div className="App">

        <Particles className='particles'
          params={part_options}
        />
        <div>
          <ImageLinkForm onPaletteSizeChange={this.onPaletteSizeChange} onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          <div id="inner">
            <MetroSpinner
              size={150}
              loading={this.state.loading}
            />
          </div>
          <ProfileGrid username={this.state.finalUsername} datain={this.state.images} />
          {this.state.error === true ?
            (this.state.errorMsg === 'notfound' ?
              <h2> Oops! Something isnt right. Make sure the profile exists</h2> :
              <h2> Oops! Something isnt right. Make sure the profile is public</h2>)
            : ""}

        </div>
      </div>
    );
  }
}

export default App;
