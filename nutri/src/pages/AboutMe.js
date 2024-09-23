import React from 'react';
import Portrait from '../images/Vivi.png';

const AboutMe = () => {
  return <div>
  <h1>A propos de moi </h1>;
 <img className='portrait' src={Portrait} alt='Virginie' />
 </div>
};

export default  AboutMe;
