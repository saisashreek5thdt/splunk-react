import React, {Component} from 'react';

export default class Mainnav extends Component {
    render() {
        return(
            <div>
                <div className="main-navigation">
                    <ul className=" one-page-scroll-menu navigation-box">
                        <li className="current scrollToLink">
                            <a href="#banner">Home</a>
                            <ul className="sub-menu">
                                <li><a href="/">Home 01</a></li>
                                <li><a href="/">Home 02</a></li>
                                <li><a href="/">Header Versions</a>
                                    <ul className="sub-menu">
                                        <li><a href="/">Header 01</a></li>
                                        <li><a href="/">Header 02</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="scrollToLink">
                            <a href="/">Features</a>

                        </li>
                        <li className="scrollToLink">
                            <a href="/">Video</a>

                        </li>
                        <li className="scrollToLink">
                            <a href="/">Pricing</a>
                        </li>
                        <li className="scrollToLink">
                            <a href="/">App Screenshots</a>
                        </li>
                        <li className="scrollToLink">
                            <a href="#news">News</a>
                            <ul className="sub-menu">
                                <li><a href="/">News Page</a></li>
                                <li><a href="/">News Details</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}