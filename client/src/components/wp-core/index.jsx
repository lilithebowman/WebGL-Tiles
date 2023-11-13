import React, { Component } from 'react';
import { Col } from 'bootstrap';

import Footer from './footer';
import Header from './header';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
        <Col id="primary" className="row w-100 site-main">
          {children}
        </Col>
    );
  }
}

export { Header, Footer, Main }