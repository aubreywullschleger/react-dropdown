var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'choose a dessert', //what should show up on the button to open/close the dropdown
  items: [ // list of items to show in dropdown
    'apple pie',
    'peach cobbler',
    'coconut cream pie'
  ]
};

// React, pls instaniate (make a cookie w/that cookie cutter) that class
var element = React.createElement(Dropdown, options);

// React, after you render that class pls place it in my body tag
React.render(element, document.querySelector('.target'));
