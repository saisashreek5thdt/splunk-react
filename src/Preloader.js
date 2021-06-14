import React, {Component} from 'react';

export default class Preloader extends Component {
    render(){
        return (
          <div>
    
            <div className="preloader">
              <img src="/assets/images/resources/preloader.png" className="preloader__image" alt="preloader img" />
            </div>     
    
          </div>
        );
      }
}