import React from 'react';
import Location from '../../core/Location';
import { Menu } from 'semantic-ui-react';

class MainMenu extends Menu {
  constructor() {
    super();
  }

  handlerLinkClick(event, props) {
    console.log([event, props]);
    if (props.to) {
      Location.push(props.to);
    } else {
      Location.push({
        pathname: event.currentTarget.pathname,
        search: event.currentTarget.search,
      });
    }
  }

  renderItems() {
    const { items } = this.props
    const { activeIndex } = this.state

    return _.map(items, (item, index) => {
      return createShorthand(MenuItem, val => ({ content: val, name: val }), item, {
        active: activeIndex === index,
        childKey: ({ content, name }) => [content, name].join('-'),
        index,
        onClisck: this.handlerLinkClick,
      })
    })
  }

  render() {
    console.log('');
    return super.render();
  }
}
