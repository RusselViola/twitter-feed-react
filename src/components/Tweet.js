import React from 'react';

let handleFavorite = event => {
  alert("You liked this");
};
let handleReply = event => {
  alert("Reply");
};
let handleRetweet = event => {
  alert("You retweeted!");
};
let handleMore = event => {
  alert("Favorites");
};

const Tweet = props => {
  let favorited = props.favorited
  let favorite_heart= ''
  let retweeted = props.retweeted
  let retweet_green= ''

  if (favorited) {
     favorite_heart = <i className="fa fa-heart red" aria-hidden="true" onClick={handleFavorite}></i>
  } else {
    favorite_heart = <i className="fa fa-heart" aria-hidden="true" onClick={handleFavorite}></i>
  }

  if (retweeted) {
    retweet_green = <i className="fa fa-retweet green"aria-hidden="true" onClick={handleRetweet}></i>
  } else {
    retweet_green = <i className="fa fa-retweet"aria-hidden="true" onClick={handleRetweet}></i>
  }

  return (
    <div className="row callout">
      <div id="profile-pic">
        <img className= "thumbnail" src={props.profilePic}/>
      </div>
      <div id="tweet-header">
        <span className="name">{props.name}</span>
        <span className="screen_name">{props.screenName}</span>
        <span className="timestamp">{props.timestamp}</span>
      </div>

      <div id="tweet-body">
        <span className="text">{props.text}</span>
        <img className="bodyImage" src={props.mediaImg}/>
      </div>

      <div id="buttons">

        {favorited}
        <i className="fa fa-reply" aria-hidden="true" onClick={handleReply}></i>
        {retweet_green}
        {favorite_heart}
        <i className="fa fa-ellipsis-h"aria-hidden="true" onClick={handleMore}></i>
      </div>
    </div>
  )
};

export default Tweet;
