import React, {Component} from 'react';

import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Video from './components/Video';
import Powerful from './components/Powerful';
import Platform from './components/Platform';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Brands from './components/Brands';
import Project_info from './components/Project_info';
import Screenshot from './components/Screenshot';
import Faq from './components/Faq';
import Mailfun from './components/Mailfun';
import Footer from './components/Footer';

export default class App extends Component {
  render(){
    return (
      <div>

        <div className="page-wrapper">
            <Header />
            <Banner />
            <Features />
            <Video />
            <Powerful />
            <Platform />
            <Pricing />
            <Testimonial />
            <Brands />
            <Project_info />
            <Screenshot />
            <Faq />
            <Mailfun />
            <Footer /> 
        </div>
      </div>
    );
  }
  
}
