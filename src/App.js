import React, { Component } from 'react';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import Particles from 'react-particles-js';
import { MetroSpinner } from "react-spinners-kit";

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
  input: '',
  imageUrl: '',
  finalUsername: '',
  box: {},
  images: [],
  route: 'signin',
  isSignedIn: true,
  loading: false,
  error: false,
  errorMsg: '',
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
      this.setState({
        loading: true,
        error: false,
      })
      fetch(`https://couleur-be.herokuapp.com/api/palettes?user=${this.state.input}`, {
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
          <div id="inner">
            <MetroSpinner
              size={150}
              loading={this.state.loading}
            />
          </div>
          <FaceRecognition username={this.state.finalUsername} datain={this.state.images} />
          {this.state.error === true ?
            (this.state.errorMsg === 'notfound' ?
              <h2> Oops! Something isnt right. Make sure the profile is EXISts</h2> :
              <h2> Oops! Something isnt right. Make sure the profile is public</h2>)
            : ""}

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
