import React from 'react'
import { Link } from 'react-scroll';
import './Topcontent.css';

const Topcontent = () => {
  return (
    <div className='top__container'>
        <h2>Mr.Mohammed Rizwan</h2>
        <p>I'm a Professional web and app developer</p>
        <a href='#'>
          <button>Download CV</button>
        </a>
        <Link to='project' smooth={true} duration={500}>
          <button>My Work</button>
        </Link>
    </div>
  )
}

export default Topcontent;