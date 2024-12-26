import React from 'react'
import "./aside.css"
import Asid_button  from './Asid_button';


const Aside = () => (
  <div className="aside_cont">
    <div className="el">
      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nemo quasi vero...</h1>
      <div className="Button_cont">
        <Asid_button filled role="button" onClick={() => alert('Action 1')}>
          Delete
        </Asid_button>
        <Asid_button secondary role="button" onClick={() => alert('Action 2')}>
          Upgrade
        </Asid_button>
      </div>

    </div>
  </div>
)


export default Aside
