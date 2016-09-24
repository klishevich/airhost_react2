import React, { Component, PropTypes } from 'react'

export default class Booking extends Component {
  render() {
    const { booking } = this.props
    const house_ref = '/houses/' + booking.house_id 
    return (
      <tr>
        <td>
          <div className="media-body">
            <div className="media-heading">
              <a href={house_ref} className="letter-icon-title">{ booking.house }</a>
            </div>
          </div>
        </td>
        <td>
          <h6 className="text-semibold no-margin">{ moment(booking.dtstart).format("DD.MM.YYYY") }</h6>
        </td>
        <td>
          <span className="text-muted text-size-small">{ booking.summary }</span>
        </td>
      </tr>
    )
  }
}

Booking.propTypes = {
  booking: PropTypes.object.isRequired
}