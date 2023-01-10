import React from 'react'
import { Link } from 'react-scroll';
import './Topcontent.css';

const Topcontent = () => {
  return (
    <div className='top_container'>
    <div className='top__container'>
        <h2>Mr.Mohammed Rizwan</h2>
        <p>I'm a Professional web and app developer</p>
        <a href='#'>
          <button className='topcontent_downloadbutton'>Download CV</button>
        </a>
        <Link to='project' smooth={true} duration={500}>
          <button className='topcontent_myworkbutton'>My Work</button>
        </Link>
    </div>
    </div>
  )
}

export default Topcontent;