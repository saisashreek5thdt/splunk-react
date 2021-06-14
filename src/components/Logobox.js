import React, {Component} from 'react';
import Logo from '../assets/images/resources/logo-dark.png';

export default class Logobox extends Component {
    render() {
        return(
            <div>
                <div className="logo-box clearfix">
                    <a className="navbar-brand" href="index.html">
                        <img src="{Logo}" className="main-logo" width="{119}" alt="LOGO" />
                    </a>
                    <button className="menu-toggler" data-target=".main-navigation">
                        <span className="fa fa-bars"></span>
                    </button>
                </div>
            </div>
        );
    }
}