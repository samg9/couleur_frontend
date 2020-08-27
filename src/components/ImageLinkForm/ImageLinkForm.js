import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onAlgoChange, onUserChange,onButtonSubmit }) => {

  return (
    <div>
      <b className=' w-80 f1 white '>Volops Recommender</b>
      <h4 className='pink'>Select a recommendation algorithm and select a user</h4>
      <div className='center'>
        <div className='form  center pa4 br2 shadow-5'>
          <b className=' w-80 f3 light-blue '>
        Select Algorithm
      </b>
          <select className="form-control form-control-lg" defaultValue="6" onChange={onAlgoChange}>
            <option>Content Based Filtering</option>
            <option>Collaborative Filtering with JCI</option>
            <option>Jaccard Similarity Index</option>
          </select>
          <b className=' w-80 f3 light-blue'>
        Select User
      </b>
          <select className="form-control form-control-lg" defaultValue="Harry Potter" onChange={onUserChange}>
            <option>Harry Potter</option>
            <option>Hermione Granger</option>
            <option>Ron Weasley</option>
            <option>Luna Lovegood</option>
            <option>Albus Dumbledore</option>
            <option>Draco Malfoy</option>
          </select>
          <button className=' w-30 grow f4 link ph3 pv2 dib white bg-pink'
            onClick={onButtonSubmit}
          >
            Get Recommendations
      </button>
        </div>
      </div>
    </div>
  );


}
export default ImageLinkForm;
