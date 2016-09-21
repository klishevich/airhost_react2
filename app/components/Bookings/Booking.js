import React, { Component, PropTypes } from 'react'

export default class Booking extends Component {
  render() {
    const { booking } = this.props
    return (
      <tr>
        <td>
          <div className="media-body">
            <div className="media-heading">
              <a href="#" className="letter-icon-title">{ booking.status }</a>
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