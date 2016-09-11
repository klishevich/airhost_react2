import React, { Component, PropTypes } from 'react'

export default class House extends Component {
  render() {
    const { house } = this.props
    const ref = '/houses/' + house.id
    return (
      <div>
        <div>
          <span><b>Id:</b></span>
          <span>{house.id}</span>
        </div>
        <div>
          <span><b>Address:</b></span>
          <span>{house.address}</span>
        </div>
        <div>
          <span><b>House name:</b></span>
          <span>{house.name}</span>
        </div>
        <div><a href={ref}>View Details</a></div>
        <br/>
      </div>
    )
  }
}

House.propTypes = {
  house: PropTypes.object.isRequired
}