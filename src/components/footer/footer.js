import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops'



export default class Footer extends Component {
 




  render() {
       
    return (
      
      <React.Fragment>

   
        
   <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.facebook.com/pellennen"><i className="fa fa-facebook" /></a></li>
         
              <li><a href="https://www.linkedin.com/in/per-zackrisson-a0343b172"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/rangeltangel"><i className="fa fa-instagram" /></a></li>
           
            </ul>
           
          </div>
          

        </div>

        
      </footer>
      </React.Fragment>
    );
  }
}