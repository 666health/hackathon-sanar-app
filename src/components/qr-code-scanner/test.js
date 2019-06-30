import React, { Component } from 'react';
import QrScanner from 'qr-scanner'

QrScanner.WORKER_PATH = '../../../qr-scanner-worker-min.js';


export default class Scanner extends Component {

  constructor(props) {
    super(props);
    this.ref = null;
    this.scanner = null;
  }

  componentDidMount() {
    const scanner = new QrScanner(this.ref, result => this.setResult(result));
    scanner.start();
  }

  setResult(result) {
    console.log({result});
  }

  componentWillUnmount() {
    this.scanner && this.scanner.stop();
  }

  render() {
    return (
      <video className={this.props.className} ref={r => this.ref = r}></video>
    );
  }

}
