require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let log_Image = require('../images/yeoman.png');

let container_class = 'container';
let inc_name = 'ООО "КранТехСервис"';


class AppComponent extends React.Component {
  render() {
    return (
      <div className={container_class}>
        <img src={log_Image} alt={inc_name} />
        <div className="notice">{inc_name}</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
