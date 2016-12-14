import React from 'react';
import Location from '../../core/Location';
import { Menu } from 'semantic-ui-react';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class MenuItem extends Menu.Item { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    //super.handleClick += this.handleClick2;
    /*if (super.onClick) {
      super.addEventListener('click', this.handleClick2);
    }*/
  }

  handleClick = (event, props) => {
    let allowTransition = true;

    if (this.props.onClick) {
      this.props.onClick(event, props);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      allowTransition = false;
    }

    event.preventDefault();

    if (allowTransition) {
      if (this.props.to) {
        Location.push(this.props.to);
      } else {
        Location.push({
          pathname: event.currentTarget.pathname,
          search: event.currentTarget.search,
        });
      }
    }
  };

  render() {
    // console.log(super.render());
    let res = super.render();
    console.log(res);
    return res;
  }
}

export default MenuItem;
