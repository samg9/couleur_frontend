import React, { Component } from 'react';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Swatch from './components/Swatch/Swatch';
import './App.css';
import Particles from 'react-particles-js';
//import Clarifai from 'clarifai'; //in back-end now 
//const Clarifai = require('clarifai');

var images = {};

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
    console.log(this.state.input);
  }


  onButtonSubmit = () => {

    if (this.state.input !== '') {


      this.setState({ imageUrl: this.state.input });

      //console.log('click');
      //var apiKey = "f465fba36c7f4fb1b9245afb758345f1"
      //var clarifaiURL = "https://samples.clarifai.com/face-det.jpg"

      fetch(`http://127.0.0.1:5000/api/palettes?user=${this.state.input}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json())
        .then((response) => {
          if (response != null) {
            images = response;
            // this.statimages = response.map((k, v) => {
            //   return <div>
            //     <img src={"data:image/png;base64," + k} alt="Pic" />
            //     <img src={v} alt="Pal" />
            //   </div>
            // })

          }
          console.log(response);
          console.log(typeof response);
        }).catch((err) => {
          console.log("errrrrrrr");
          console.log(err);
        })
    }


    //   fetch('https://vast-scrubland-17023.herokuapp.com/imageurl', {
    //           method: 'post', 
    //           headers: {'Content-Type': 'application/json'},
    //           body: JSON.stringify({
    //             input: this.state.input 
    //           })
    //   })
    //   .then(response => response.json())
    //     .then(response => {
    //       if(response){
    //         fetch('https://vast-scrubland-17023.herokuapp.com/image', {
    //           method: 'put', 
    //           headers: {'Content-Type': 'application/json'},
    //           body: JSON.stringify({
    //             id: this.state.user.id 
    //           })
    //         })
    //         .then(response => response.json())
    //         .then(count=> { 
    //           this.setState(Object.assign(this.state.user,{entries : count}))
    //         })
    //          .catch( console.log);
    //       }

    //       this.displayFaceBox( this.findFaceLocation(response)) 

    //     })
    //     .catch( err => console.log(err) );
    //           //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    //     }
    // }
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
          <Swatch />
          <FaceRecognition />
          {/* <img src="http://www.jquery-az.com/html/images/banana.jpg" title="Title of image" alt="alt text here" /> */}
          {/* <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} /> */}

          {/* <table width="500" border="0" cellpadding="5">
    
            <tr>

              <td align="center" valign="center">
                <img src={'picture.JPG'} alt="description here" />
                <br />
                Caption text centered under the image.
</td>

              <td align="center" valign="center">
                <img src="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg" alt="description here" />
                <br />
                Caption text centered under the image.
</td>
              <td align="center" valign="center">
                <img src="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg" alt="description here" />
                <br />
                Caption text centered under the image.
</td>

            </tr>

          </table> */}
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
