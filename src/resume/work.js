

import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
const slides = [
    { id: 0, url: 'photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=993&q=80' },
    { id: 1, url: 'photo-1511854005000-f27912f66ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
    { id: 2, url: 'photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
    { id: 3, url: 'photo-1557286581-db6c124a6e2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' },
  ]
function Work(){ 
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    })
    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
    return transitions.map(({ item, props, key }) => (
      <animated.div
        id='resume  '
        key={key}
        class="bg"
        style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
      />
    ))
    
}

export default Work