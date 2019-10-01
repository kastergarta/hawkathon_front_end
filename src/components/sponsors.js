import React from 'react';
import FadeExample from './fadesponsors.js'

class Sponsors extends React.Component {

  render(){
  return (
    <div>
      <div className="sponsors-headline">
      <FadeExample />
      </div>
      <div className="sponsors">
          <div><img className="sponsorsImage" id="flatiron" src="https://cdn.evbuc.com/images/48394057/258081453087/2/logo.png"/></div>
          <div><img className="sponsorsImage" id="khanacademy" src="https://khanacademy.zendesk.com/hc/article_attachments/360008086211/Screen_Shot_2018-07-09_at_4.16.48_PM.png"/></div>
          <div><img className="sponsorsImage" id="" src=""/></div>
      </div>
    </div>
  );
 }
}

export default Sponsors;
