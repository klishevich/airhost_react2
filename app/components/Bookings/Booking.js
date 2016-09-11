import React, { Component, PropTypes } from 'react'

export default class Booking extends Component {
  render() {
    const { booking } = this.props
    return (
      <div>
        <div>
          <span><b>Id:</b></span>
         <span>{booking.id}</span>
        </div>
        <div>
          <span><b>House:</b></span>
          <span>{booking.house}</span>
        </div>
      </div>
    )
  }
}

Booking.propTypes = {
  booking: PropTypes.object.isRequired
}