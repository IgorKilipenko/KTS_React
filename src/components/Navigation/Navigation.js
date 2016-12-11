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
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

class Navigation extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state;
    return (
       <div>
         <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
         <Sidebar.Pushable as={Segment}>
           <Sidebar as={Menu} animation="push" width="thin" visible={visible} icon="labeled" vertical inverted>
             <Menu.Item name="home">
               <Icon name="home" />
               Home
             </Menu.Item>
             <Menu.Item name="gamepad">
               <Icon name="gamepad" />
               Games
             </Menu.Item>
             <Menu.Item name="camera">
               <Icon name="camera" />
               Channels
             </Menu.Item>
           </Sidebar>
           <Sidebar.Pusher>
             <Segment basic>
               <Header as="h3">Application Content</Header>
               <Image src="http://semantic-ui.com/images/wireframe/paragraph.png" />
             </Segment>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
       </div>
     );
  }
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(Navigation, s);
