/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes, Component } from 'react';
// import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
// import Link from '../Link';
import MenuItem from '../MenuItem';
// import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
// import MainMenu from '../MainMenu';
import { Menu } from 'semantic-ui-react';

class Navigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary vertical>
        <MenuItem name="home" active={activeItem === 'home'} onClick={this.handleItemClick} to="/" />
        <MenuItem name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick} to="/contact" />
        <MenuItem name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(Navigation, s);
