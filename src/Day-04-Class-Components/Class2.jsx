import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Class2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age } = this.props.data;

    return (
      <div>
        <h1>My name is {name}</h1>
        <p>I am {age} years old!</p>
      </div>
    );
  }
}

Class2.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

Class2.defaultProps = {
  data: {
    name: 'Unknown',
    age: 0,
  },
};

export default Class2;
