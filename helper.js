var OAuth = require('oauth');
https://api.twitter.com/1.1/statuses/user_timeline.json
module.exports={
  searchTwat: function(keyword,res){
    //console.log(`https://api.twitter.com/1.1/search/tweets.json?q=%${keyword}`);
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'JzVKo2EF37rsYjCBe7XnaIFT3',
      'gseVoZcpME6MnaISG2BiTXpYr2xybV0HZIbCZMoVCaihzUQGPc',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${keyword}`,
      '213192049-9DMmRo6ibgw7BrzyQ7KaXzAy1oLGU5tRBGn9tP8o', //test user token
      'bQh2ptdKqtXREajKxfV1pVnJWr1Zt4uaglotiz9yjwYUk', //test user secret
      function (e, data, respon){
        if (e) console.error(e);
        res.send(data);
      });

  },
  searchTwat: function(keyword,res){

    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'JzVKo2EF37rsYjCBe7XnaIFT3',
      'gseVoZcpME6MnaISG2BiTXpYr2xybV0HZIbCZMoVCaihzUQGPc',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json`,
      '213192049-9DMmRo6ibgw7BrzyQ7KaXzAy1oLGU5tRBGn9tP8o', //test user token
      'bQh2ptdKqtXREajKxfV1pVnJWr1Zt4uaglotiz9yjwYUk', //test user secret
      function (e, data, respon){
        if (e) console.error(e);
        res.send(data);
      });

  }

}
