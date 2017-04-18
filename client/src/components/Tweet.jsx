import React from 'react';
import DisplayAnImage from './DisplayAnImage';

export default class Tweet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const width = 250;
    return (
      <div>
      <DisplayAnImage width={250}></DisplayAnImage>
        <h2 id="username"> Username: {this.props.username} </h2>
        <h4 id="real_name"> Real Name: {this.props.real_name} </h4>
        <p> Tweet: {this.props.children} </p>
      </div>
      );
  }
}