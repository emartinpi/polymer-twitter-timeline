(function() {
  Polymer({
    is: 'polymer-twitter-statictimeline',

    properties: {
      widgetId: String,
      ariaPolite: String, //polite, assertive, rude
      height: Number,
      borderColor: String,
      chrome: String, //noheader, nofooter, noborders, transparent, noscrollbar (space-separated list)
      tweetLimit: Number,
      showReplies: {
        type: Boolean,
        value: false
      }
    },

    ready: function() {
      if (typeof this.widgetId === 'undefined') {
        this._log(this._logf('widgetId', 'widgetId must not be undefined'));
        return;
      }

      twttr.ready(function() {
        this.createWidget();
      }.bind(this));
    },

    createWidget: function() {
      twttr.widgets.createTimeline({
        sourceType: 'widget',
        widgetId: this.widgetId
      },
      this.$.timeline, {
        ariaPolite: this.ariaPolite,
        height: this.height,
        borderColor: this.borderColor,
        chrome: this.chrome,
        tweetLimit: this.tweetLimit,
        showReplies: this.showReplies
      });
    }
  });
}());
