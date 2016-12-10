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
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';


function Contact({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Мой тест11155gggg5555</p>
        <ButtonToolbar>
          {/* Standard button */}
          <Button>Default</Button>

          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button bsStyle="primary">Primary</Button>

          {/* Indicates a successful or positive action */}
          <Button bsStyle="success">Success</Button>

          {/* Contextual button for informational alert messages */}
          <Button bsStyle="info">Info</Button>

          {/* Indicates caution should be taken with this action */}
          <Button bsStyle="warning">Warning</Button>

          {/* Indicates a dangerous or potentially negative action */}
          <Button bsStyle="danger">Danger</Button>

          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
          <Button bsStyle="link">Link</Button>
        </ButtonToolbar>
      </div>
    </div>
  );
}

Contact.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Contact, s);
