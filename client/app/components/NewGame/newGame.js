import React from 'react';
import 'whatwg-fetch';

const NewGame = () => (
  <div align='center'>
  <h3>Create New Game</h3>

              <input 
              type="text" 
              placeholder="Date"/>
              <br />

              <input 
              type="text" 
              placeholder="Time"/>
              <br />

              <input 
              type="text" 
              placeholder="Assinger"/>
              <br />

              <input 
              type="text"
              placeholder="Partner"/>
              <br />

              <input 
              type="text" 
              placeholder="Position"/>
              <br />

              <input 
              type="text" 
              placeholder="Payment Status"/>
              <br />

              <input 
              type="number"
              placeholder="Fee"/>
              <br />
              <br></br>

              <button>Add Clone</button>
              <button>Add New</button>
              <button>Submit</button>
  </div>
);

export default NewGame;