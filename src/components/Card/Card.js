'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

require('./Card.scss');

class Card extends React.Component {
  render() {
    let classes = classNames(
      'card',
      this.props.modifier
    );

    return (
      <div className={classes}>
        <h3 className="card__title">{this.props.title}</h3>
        <div className="card__content">
          <p>I am a very simple card.</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  modifierClass: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]),
  title: React.PropTypes.string
};

Card.defaultProps = {

};

export default Card;