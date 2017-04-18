import React from 'react';
import TweetList from './TweetList';
import DisplayAnImage from './DisplayAnImage';

var sampleData = [
  {id: 1, username: 'Buffy', real_name: 'Buffy Summers', text: 'I am a vampire slayer.'},
  {id: 2, username: 'Angel', real_name: 'Liam', text: 'I am a good vampire.'}
];

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData
    };
  }

  render() {
    return (
      <div>
      <h2>Tweets</h2>
      
      <TweetList tweets={this.state.data}/>
      </div>
      );
  }
}