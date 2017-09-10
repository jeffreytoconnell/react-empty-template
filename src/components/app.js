import React from 'react';
import ReactDOM from 'react-dom';


export const HelloWorld = React.createClass({
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
})

export const HelloWorld2 = React.createClass({
  render() {
    return (
      <h1>Hello World2</h1>
    )
  }
})

export function HelloWorldFunction(props) {
  return (
    <p>Hello World Function</p>
  );
}

export default (HelloWorldFunction);  // REQUIRED FOR FUNCTION