import React from 'react';

class ParallaxText extends React.Component {

  render(){
  return (
    <div className="parallaxtext">
      <div id='parallax-text-text'> <p> Hawkathon aims to federate the next generation of hackers  for the New York innovation community. We believe that by empowering students to realize their ideas and form bonds with each other and our city, we can impact the future of technology and the community</p> </div>
      <div id='parallax-text-button'> <button className='btn-grad'> REGISTER </button> </div>
    </div>
  );
 }
}

export default ParallaxText;
