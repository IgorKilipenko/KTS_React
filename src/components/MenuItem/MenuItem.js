// import React from 'react';
import Location from '../../core/Location';
import { Menu } from 'semantic-ui-react';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class MenuItem extends Menu.Item { // eslint-disable-line react/prefer-stateless-function

  handleClick = (event) => {
    let allowTransition = true;

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

    const { onClick } = this.props;
    if (onClick) onClick(event, this.props);
  }

  render() {
    return super.render();
  }
}

export default MenuItem;
