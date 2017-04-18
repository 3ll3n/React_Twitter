import React from 'react';

export default class DisplayAnImage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img width={this.props.width} src='./res/img/jessie.png' />
      ); 
  }
}