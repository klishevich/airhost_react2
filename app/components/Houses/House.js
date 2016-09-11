import React, { Component, PropTypes } from 'react'

export default class House extends Component {
  render() {
    const { house } = this.props
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
      </div>
    )
  }
}

House.propTypes = {
  house: PropTypes.object.isRequired
}