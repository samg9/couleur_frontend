import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {

  return (
    <div>
      <h1>Couleur (beta)</h1>
      <b>Displays 5 color palette for each image</b>
      <p className='f3'>
        {'Enter instagram username'}
      </p>


      <div className='center'>
        <div className='form  center pa4 br3 shadow-5'>
          <input className=' f4 pa3 w-70 center' type='tex' onChange={onInputChange} />
          <button className=' w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >
            Detect
      </button>
        </div>
      </div>
    </div>
  );


}
export default ImageLinkForm;
