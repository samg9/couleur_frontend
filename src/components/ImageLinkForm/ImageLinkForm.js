import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {

  return (
    <div>
      <b className=' w-80 f1 white light-purple'>Couleur (beta)</b>
      <h5 className='light-purple'>Displays 5 color palette for each post on a instagram account</h5>
      <b className=' w-80 f3 white light-purple'>
        Enter instagram username
      </b>


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
