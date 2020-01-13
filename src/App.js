import React, { Component } from 'react';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import Particles from 'react-particles-js';

const part_options =
{
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const intialState = {
  input: 'sampleInstagramAccount',
  imageUrl: 'sampleInstagramAccount',
  finalUsername: 'sampleInstagramAccount',
  box: {},
  images: {},
  route: 'signin',
  isSignedIn: true,
  user: {

    id: '',
    name: '',
    email: '',
    password: '',
    entires: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = intialState;
  }


  loadUser = (data) => {
    this.setState({
      user: {

        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined

      }
    })

  }



  findFaceLocation = (data) => {
    console.log(data);
    const clariFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    //console.log(width,height) ;
    return {
      leftCol: clariFace.left_col * width,
      topRow: clariFace.top_row * height,
      rightCol: width - (clariFace.right_col * width),
      bottomRow: height - (clariFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    // console.log(box);
    this.setState({ box: box });
  }

  displayFaceBox = (images) => {
    // console.log(box);
    this.setState({ images: images });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }


  onButtonSubmit = () => {

    if (this.state.input !== '') {

      this.setState({ finalUsername: this.state.input + " (to be released)" })
      this.setState({ imageUrl: this.state.input });
      //   fetch(`http://127.0.0.1:5000/api/palettes?user=${this.state.input}`, {
      //     method: 'GET',
      //     headers: { 'Content-Type': 'application/json' }
      //   }).then(response => response.json())
      //     .then((response) => {
      //       if (response != null) {


      //       }
      //       console.log(response);
      //     }).catch((err) => {
      //       console.log(err);
      //     })
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
    //const {isSignedIn, imageUrl , route , box } =this.state ; //remove this dot states for cleaning
    return (

      <div className="App">

        <Particles className='particles'
          params={part_options}
        />
        {/* <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} /> */}
        {/* {this.state.route === 'home' */}
        <div>

          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition username={this.state.finalUsername} />
        </div>
        {/* : (
          this.state.route === 'signin'
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) */}

        {/* } */}


      </div>
    );
  }
}

export default App;
