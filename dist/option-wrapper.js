'use strict';

var React = require('react/addons');
var cx = React.addons.classSet;

function isArray(test) {
  return Object.prototype.toString.call(test) === '[object Array]';
}

var OptionWrapper = React.createClass({
  displayName: 'OptionWrapper',

  render: function render() {
    var classes = cx({
      'react-choice-option': true,
      'react-choice-option--selected': !!this.props.selected
    });

    return React.createElement(
      'li',
      { className: classes,
        onMouseEnter: this.props.onHover.bind(null, this.props.option),
        onMouseDown: this.props.onClick.bind(null, this.props.option),
        onTouchStart: this.props.onClick.bind(null, this.props.option) },
      this.props.children
    );
  }
});

module.exports = OptionWrapper;