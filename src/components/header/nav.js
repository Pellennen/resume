import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops'

export default class nav extends Component {


    constructor() {
        super();
        this.state = {
          toggle: false
        };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
      }
      
      onMouseEnter() {
        
        this.setState({
          toggle: true
        })
        
      }
      
      onMouseLeave() {
        
        this.setState({
          toggle: false
        })
        
      }
  
  render() {
    let toggle = this.state.toggle;
    return (

      <React.Fragment>
        
      
      <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          

          <ul id="nav" className="nav">
   
  <Spring
  from={{opacity: '0'}}
        to={{
          
          opacity: toggle ? '1' : '0',
          
        }}
        config={{duration: 700}}>
        {(props) => (
          <div onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}>
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a style={props} className="smoothscroll" href="#resume">Resume</a></li>
  <li><a style={props} className="smoothscroll" href="#about">About</a></li>
          </div>
        )}
  </Spring>
 
 

           
            
          </ul> {/* end #nav */}
          
          
        </nav> {/* end #nav-wrap */}
    

      </React.Fragment>
    );
  }
}
