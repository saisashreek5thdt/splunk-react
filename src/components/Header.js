import React, {Component} from 'react';

import Logobox from './Logobox';
import Mainnav from './Mainnav';

export default class Header extends Component {
    render() {
        return(
            <header className="site-header site-header__header-one ">
                <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
                    <div className="container clearfix">
                        <Logobox />
                        <Mainnav />
                        <div className="right-side-box">
                            <a className="thm-btn header__cta-btn" href="/"><span>Login</span></a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}