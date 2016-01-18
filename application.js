var options = {
  thumbnailData: [
  {
    buttonTitle: 'see tutorials',
    num: 12,
    imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
    thumbnailHeader: 'thumbnail!',
    description: 'these are some words about react. these are some more words about react.'
  }, {
    buttonTitle: 'see tutorials',
    num: 23,
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400',
    thumbnailHeader: 'thumbnail!',
    description: 'these are some words about gulp. these are some more words about gulp.'
    }
  ]
};

// React, pls instaniate (make a cookie w/that cookie cutter) that class
var element = React.createElement(ThumbnailList, options);

// React, after you render that class pls place it in my body tag
React.render(element, document.querySelector('.target'));

// define a 'class' (make a cookie cutter)
var Badge = React.createClass({displayName: "Badge",
  render: function (){
    return (
      React.createElement("button", {className: "btn btn-primary", type: "button"}, 
        this.props.buttonTitle, " ", React.createElement("span", {className: "badge"}, this.props.num)
      )
    )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });
    return (
      React.createElement("div", null, 
        list
      )
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return (
      React.createElement("div", {className: "thumbnail"}, 
        React.createElement("img", {src: this.props.imageUrl}), 
        React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.thumbnailHeader), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
          React.createElement(Badge, {buttonTitle: this.props.buttonTitle, num: this.props.num})
        )
    )
  )
    )
  }
});
