import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = props => {
  let tweets = props.data.map(tweet => {
    let mediaUrl = '';
    if (tweet.entities.media){
      mediaUrl = tweet.entities.media[0].media_url
    }


    return (
      <Tweet
        key={tweet.id_str}
        text={tweet.text}
        name={tweet.user.name}
        screenName={tweet.user.screen_name}
        profilePic={tweet.user.profile_image_url}
        retweeted={tweet.retweeted}
        retweetCount={tweet.retweet_count}
        favorited={tweet.favorited}
        favoriteCount={tweet.favorite_count}
        timestamp={tweet.timestamp_ms}
        mediaImg={mediaUrl}
      />
    );
  });

  return(
    <div className="row callout single">
      {tweets}
    </div>
  )
};
export default TwitterFeed;
