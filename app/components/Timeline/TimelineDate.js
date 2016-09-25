import React, { Component, PropTypes } from 'react'

export default class TimelineDate extends Component {
  render() {
    const { dateText } = this.props
    return (
      <div className="timeline-date text-muted">
        <i className="icon-history position-left"></i> 
        <span className="text-semibold">{ dateText }</span>
      </div>
    )
  }
}

TimelineDate.propTypes = {
  dateText: PropTypes.string.isRequired
}