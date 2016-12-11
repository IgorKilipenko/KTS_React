/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.scss';
import { Button } from 'semantic-ui-react';

function Contact({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Мой тест11155gggg5555</p>
        <div>
          <Button basic>Standard</Button>
          <Button basic color="red">Red</Button>
          <Button basic color="orange">Orange</Button>
          <Button basic color="yellow">Yellow</Button>
          <Button basic color="olive">Olive</Button>
          <Button basic color="green">Green</Button>
          <Button basic color="teal">Teal</Button>
          <Button basic color="blue">Blue</Button>
          <Button basic color="violet">Violet</Button>
          <Button basic color="purple">Purple</Button>
          <Button basic color="pink">Pink</Button>
          <Button basic color="brown">Brown</Button>
          <Button basic color="grey">Grey</Button>
          <Button basic color="black">Black</Button>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Contact, s);
