import React, { useState} from 'react'
import { useSpring, animated } from 'react-spring'

function About() {

  const [state, toggle] = useState(true)
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 4000} })

  
  

    return (

      
        <section id="about">
 <div onClick={() => toggle(!state)}>
      <animated.div
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 4] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
            })
            .interpolate(x => `scale(${x})`)
        }}>
        <div className="row">
         
         <div className="nine columns main-col">
           <h2>About Me</h2>
           <p>I prefer to keep learning, continue challenging myself, and do interesting things. I’m easily inspired and more then willing to follow my fascinations wherever they take me.
           I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease. 
           I’m a people-person with deep emotions and empathy.
           Feel free to get in touch by any means of communication.
           </p>
           <div className="row">
             <div className="columns contact-details">
               <h2>Contact Details</h2>
               <p className="address">
                 <span>Per Zackrisson</span><br />
                 <span>Främlingsvägen 19C<br />
                   126 48 Hägersten
                 </span><br />
                 
                 <span>perszackrisson@gmail.com</span>
               </p>
             </div>
             <div className="columns download">
               <p>

               </p>
             </div>
           </div> {/* end row */}
         </div> {/* end .main-col */}
         
       </div>
       
      </animated.div>
      <div className='things'>My passions</div>
    </div>
     
        
    
       
      </section> 

     
    );
  
}

export default About