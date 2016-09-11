import React, { Component, PropTypes } from 'react'

export default class Booking extends Component {
  render() {
    const { booking } = this.props
    return (
      <div>
        <div>
          <span><b>Id: </b></span>
         <span>{booking.id}</span>
        </div>
        <div>
          <span><b>House: </b></span>
          <span>{booking.house}</span>
        </div>
        <div>
          <span><b>Date Start: </b></span>
          <span>{booking.dtstart}</span>
        </div>
        <div>
          <span><b>Date End: </b></span>
          <span>{booking.dtend}</span>
        </div>
        <div>
          <span><b>Status: </b></span>
          <span>{booking.status}</span>
        </div>
        <div>
          <span><b>Summary: </b></span>
          <span>{booking.summary}</span>
        </div>
        <div>
          <span><b>URL: </b></span>
          <span><a href={booking.url} target='_blank'>Go to URL</a></span>
        </div>
        <br/>
      </div>
    )
  }
}

Booking.propTypes = {
  booking: PropTypes.object.isRequired
}