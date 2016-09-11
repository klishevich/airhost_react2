import React, { Component, PropTypes } from 'react'

// import styles from './styles.css'

import House from './House';

export default class Houses extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const houses = this.props.houses || []
    console.log('Houses component', this.props)
    return (
      <div>
        <div>
        { houses.map((item) => (
            <House key={ item.id } house={ item } />
          )) }
      </div>
      </div>
    );
  }
}

Houses.propTypes = {
  houses: PropTypes.array
};

