import React from 'react';
import Tweet from './Tweet'


export default class TweetList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tweetComponents = this.props.tweets.map((tweet) => {
      return (
        <Tweet key={tweet.id} username={tweet.username} real_name={tweet.real_name}>
        {tweet.text}
        </Tweet>
        );
    });

    return (
      <div>
        {tweetComponents}
      </div>
      );
  }
}