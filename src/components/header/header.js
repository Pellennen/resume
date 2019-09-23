import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops'



export default class Header extends Component {

  
  
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
      {/*generated code*/}
      <header id="home">
     
        <div className="row banner">
          <div className="banner-text">
            {/*Start animation */}
          <Spring
        from={{opacity: '0'}}
        to={{
          
          opacity: toggle ? '1' : '0',
          width: toggle ? '100%' : '0%',
          backgroundColor:toggle ? 'white' : 'black' 
        }}
        config={{duration: 700}}
        >
        {(props) => (
          <div onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}>
          <h1 className="responsive-headline">Pelle Zackrisson</h1>
            <div style={props} id="underline"></div>
          </div>
        )}
       </Spring>
       {/*End Animation */}
    
  

            
            <h3> Welcome to this portfolio that is done in react. <br></br>I'm a <span>FrontEnd Developer</span>, creating awesome and
              effective visual identities for companies of all sizes . Let's <a className="smoothscroll" href="#about"> start scrolling</a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://www.facebook.com/pellennen"><i className="fa fa-facebook" /></a></li>

              <li><a href="https://www.linkedin.com/in/per-zackrisson-a0343b172"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/rangeltangel"><i className="fa fa-instagram" /></a></li>
             
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header> {/* Header End */}
      </React.Fragment>
    );
  }
}