import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  Meteor.publish("articles", () => {
    return articles.find();
  });

  Meteor.publish("reviews", () => {
    return reviews.find();
  });

  YoutubeApi.authenticate({
    type: 'key',
    key: 'AIzaSyAdcXOCyeqQKd7gH5qibdFTSrKeb4u5OKY '
  });

});
