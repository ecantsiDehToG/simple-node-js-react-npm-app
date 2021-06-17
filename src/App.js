import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const getUrlParam = name => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

class App extends Component {
  constructor(props){
            super(props);
        this.state={
          sUrl:'',
          fUrl:'',
        }
      }
  componentDidMount() {
    const sUrl=decodeURIComponent(getUrlParam('sUrl'));
    const fUrl=decodeURIComponent(getUrlParam('fUrl'));
    this.setState({
      sUrl,
      fUrl,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <a href={this.state.sUrl}>CPS 成功 回调地址测试</a>
          <a href={this.state.fUrl}>CPS 失败 回调地址测试</a>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <strong>
        almost done
      </strong>
      </div>
    );
  }
}

export default App;
