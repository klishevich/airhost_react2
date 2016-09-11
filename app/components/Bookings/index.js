import React, { Component, PropTypes } from 'react'

// import styles from './styles.css'

// import { getBookings } from '../../actions/bookingActions'

export default class Bookings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const { bookings } = this.props
  	console.log('Bookings component', this.props)
    return (
      <div>
        <div>Bookings component</div>
      </div>
    );
  }
}

Bookings.propTypes = {
  bookings: PropTypes.array
};

