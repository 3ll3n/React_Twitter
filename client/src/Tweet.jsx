import React from 'react';

export default class Tweet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 id="username">
          {this.props.username}
        </h2>
        <h4 id="real_name">
          {this.props.real_name}
        </h4>
        <p>
          {this.props.children}
        </p>
      </div>
      );
  }
}