(function() {
  Polymer({
    is: 'polymer-twitter-timeline',

    properties: {

      /**
       * This id has to be created through twitter account
       */
      widgetId: String,

      /**
       * Set an assertive ARIA politeness value for widget components and updates.
       * *polite*, *assertive* or *rude*
       * Default *polite*
       */
      ariaPolite: String,

      /**
       * When set to dark, displays Tweet with light text over a dark background.
       */
      theme: String,

      /**
       * Adjust the color of Tweet links with a hexadecimal color value.
       */
      linkColor: String,

      /**
       * Set the height of a displayed widget, overriding the value stored with the widget ID. Must be greater than 200 pixels.
       * Note: the height parameter does not apply when a tweet-limit parameter is specified
       * Default: *600*
       */
      height: Number,

      /**
       * Set the maximum width of the widget between 180 and 520 pixels.
       */
      width: Number,

      /**
       * Set the color of widget component borders, including the border between Tweets, with a hexadecimal color value.
       */
      borderColor: String,

      /**
       *
       * Remove a display component of a timeline with space-separated tokens:
       *  *noheader* - hides the header
       *  *nofooter* - hides the footer, if visible
       *  *noborders* - removes all borders: around the widget, between Tweets, and inside a Tweet
       *  *noscrollbar* - crop and hide the timeline scrollbar, if visible
       *  *transparent* - remove background color
       */
      chrome: String,

      /**
       * Display an expanded timeline of between 1 and 20 Tweets.
       */
      tweetLimit: Number,

      /**
       * A supported Twitter language code.
       */
      lang: {
        type: String,
        value: 'en'
      }
    },

    ready: function() {
      if (typeof this.widgetId === 'undefined') {
        this._log(this._logf('widgetId', 'widgetId must not be undefined'));
        return;
      }
      twttr.ready(function() {
        this._createWidget();
      }.bind(this));
    },

    /**
     * Create a twitter widget with a specific id
     */
    _createWidget: function() {
      twttr.widgets.createTimeline({
        sourceType: 'widget',
        widgetId: this.widgetId
      },
      this.$.timeline, {
        ariaPolite: this.ariaPolite,
        lang: this.lang,
        theme: this.theme,
        linkColor: this.linkColor,
        borderColor: this.borderColor,
        height: this.height,
        width: this.width,
        chrome: this.chrome,
        tweetLimit: this.tweetLimit
      });
    }
  });
}());
