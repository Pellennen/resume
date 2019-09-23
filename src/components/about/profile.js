
import { useSpring, animated } from 'react-spring'
import React from 'react'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
function Pic(){
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 1000, friction: 100 } }))
    return (

        <section id='about'>
            <div class="centerpic">
        <animated.div
      id="profile-pic"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
    </div>
        

        </section>
         
         
      )
}



export default Pic