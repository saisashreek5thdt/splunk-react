import React, {Component} from 'react';

export default class Pricing extends Component {
    render() {
        return(
            <div>
                <section className="pricing-one" id="pricing">
                    <div className="container">
                        <div className="block-title text-center">
                            <h2 className="block-title__title">Choose <span>Pricing Plans</span> Which <br/> Suits Your Needs.</h2>
                        </div>
                        <ul className="list-inline text-center switch-toggler-list" role="tablist" id="switch-toggle-tab">
                            <li className="month active"><a href="/">Monthly</a></li>
                            <li>
                                <label className="switch on">
                                    <span className="slider round"></span>
                                </label>
                            </li>
                            <li className="year"><a href="/">Yearly</a></li>
                        </ul>
                        <div className="tabed-content">
                            <div id="month">
                                <div className="row pricing-one__price-row">
                                    <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                                        <div className="pricing-one__single text-center">
                                            <h3>$20.00</h3>
                                            <p>basic pack</p>
                                            <ul className="list-unstyled">
                                                <li>Extra features</li>
                                                <li>Lifetime free support</li>
                                                <li>Upgrate options</li>
                                                <li>Full access</li>
                                            </ul>
                                            <a href="/" className="thm-btn pricing-one__btn"><span>Choose Plan</span></a>
                                            <span className="tag-line">No hidden charges!</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow fadeInDown" data-wow-duration="1500ms">
                                        <div className="pricing-one__single text-center">
                                            <h3>$30.00</h3>
                                            <p>medium pack</p>
                                            <ul className="list-unstyled">
                                                <li>Extra features</li>
                                                <li>Lifetime free support</li>
                                                <li>Upgrate options</li>
                                                <li>Full access</li>
                                            </ul>
                                            <a href="/" className="thm-btn pricing-one__btn"><span>Choose Plan</span></a>
                                            <span className="tag-line">No hidden charges!</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                                        <div className="pricing-one__single text-center">
                                            <h3>$40.00</h3>
                                            <p>premium pack</p>
                                            <ul className="list-unstyled">
                                                <li>Extra features</li>
                                                <li>Lifetime free support</li>
                                                <li>Upgrate options</li>
                                                <li>Full access</li>
                                            </ul>
                                            <a href="/" className="thm-btn pricing-one__btn"><span>Choose Plan</span></a>
                                            <span className="tag-line">No hidden charges!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="year">
                                <div className="row pricing-one__price-row">
                                    <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                                        <div className="pricing-one__single text-center">
                                            <h3>$20.00</h3>
                                            <p>basic pack</p>
                                            <ul className="list-unstyled">
                                                <li>Extra features</li>
                                                <li>Lifetime free support</li>
                                                <li>Upgrate options</li>
                                                <li>Full access</li>
                                            </ul>
                                            <a href="/" className="thm-btn pricing-one__btn"><span>Choose Plan</span></a>
                                            <span className="tag-line">No hidden charges!</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow fadeInDown" data-wow-duration="1500ms">
                                        <div className="pricing-one__single text-center">
                                            <h3>$30.00</h3>
                                            <p>medium pack</p>
                                            <ul className="list-unstyled">
                                                <li>Extra features</li>
                                                <li>Lifetime free support</li>
                                                <li>Upgrate options</li>
                                                <li>Full access</li>
                                            </ul>
                                            <a href="/" className="thm-btn pricing-one__btn"><span>Choose Plan</span></a>
                                            <span className="tag-line">No hidden charges!</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                                        <div className="pricing-one__single text-center">
                                            <h3>$40.00</h3>
                                            <p>premium pack</p>
                                            <ul className="list-unstyled">
                                                <li>Extra features</li>
                                                <li>Lifetime free support</li>
                                                <li>Upgrate options</li>
                                                <li>Full access</li>
                                            </ul>
                                            <a href="/" className="thm-btn pricing-one__btn"><span>Choose Plan</span></a>
                                            <span className="tag-line">No hidden charges!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}