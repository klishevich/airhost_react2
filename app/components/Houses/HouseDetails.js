import React, { Component, PropTypes } from 'react'

export default class HouseDetails extends Component {
  render() {
    const { house } = this.props
    return (
      <div>
        <div>
          <img src={house.photo} width='600px'/>
        </div>
        <div>
          <span><b>Id: </b></span>
          <span>{house.id}</span>
        </div>
        <div>
          <span><b>Address: </b></span>
          <span>{house.address}</span>
        </div>
        <div>
          <span><b>House name: </b></span>
          <span>{house.name}</span>
        </div>
        <div>
          <span><b>AirbnbId: </b></span>
          <span>{house.airbnbid}</span>
        </div>
        <div>
          <span><b>ICal: </b></span>
          <span><a href={house.ical}>ICal link</a></span>
        </div>
        <div>
          <span><b>Status: </b></span>
          <span>{house.status}</span>
        </div>
        <br/>
      </div>
    )
  }
}

HouseDetails.propTypes = {
  house: PropTypes.object.isRequired
}