'use strict';

require('./main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import StyleGuideBlock from './components/StyleGuideBlock/StyleGuideBlock';

// Define your components in this array
// `modifiers` is a list of BEM classes that modify the base component
const components = [
  {
    component: require('./components/Card/Card'),
    name: 'Card',
    description: require('./components/Card/README.md'),
    props: {
      title: "Card title"
    },
    modifiers: []
  }
];

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.setInitialState();
  }

  setInitialState() {
    // This is used for rendering one active component at a time
    const initialState = components.reduce((result, value) => {
      result[value.name] = false;

      return result;
    }, {});

    return initialState;
  }

  handleClick(componentName, e) {
    e.preventDefault();

    let newState = this.setInitialState();
    newState[componentName] = true;

    this.setState(newState);
  }

  render() {
    return (
      <div className="style-guide">
        <div className="style-guide__nav">
          <h2>Components</h2>

          <ul className="style-guide__list">
            {components.map((component, i) => {
              return (
                <li className={`style-guide__nav-item${this.state[component.name] ? ' is-selected': ''}`} key={`nav-item-${i}`}>
                  <a
                    className="style-guide__nav-link"
                    href={`#${component.name.toLowerCase()}`}
                    onClick={this.handleClick.bind(this, component.name)}
                  >
                    {component.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="style-guide__components">
          <h1>Style Guide with React</h1>
          <p>Use the menu to see each component.</p>

          {components.map((Component, i) => {
            if (!this.state[Component.name]) {
              return null;
            }

            return (
              <StyleGuideBlock
                key={i}
                description={Component.description}
                modifiers={Component.modifiers}
              >
                <Component.component {...Component.props} />
              </StyleGuideBlock>
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MainComponent />, document.getElementById('app'));
