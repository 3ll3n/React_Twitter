import React from 'react';

export default class Tweet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 id="username">
          Username: {this.props.username}
        </h2>
        <h4 id="real_name">
          Real Name: {this.props.real_name}
        </h4>
        <p>
          Tweet: {this.props.children}
        </p>
      </div>
      );
  }
}