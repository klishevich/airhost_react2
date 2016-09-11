import React, { Component, PropTypes } from 'react'

// import styles from './styles.css'

import Booking from './Booking';

export default class Bookings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bookings = this.props.bookings || [];
  	console.log('Bookings component', this.props)
    return (
      <div>
        <div>
        { bookings.map((item) => (
            <Booking key={ item.id } booking={ item } />
          )) }
        </div>
      </div>
    );
  }
}

Bookings.propTypes = {
  bookings: PropTypes.array
};

