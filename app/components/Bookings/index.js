import React, { Component, PropTypes } from 'react'

// import styles from './styles.css'

import Booking from './Booking';

export default class Bookings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bookings = this.props.bookings || [];
  	// console.log('Bookings component', this.props)
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h6 className="panel-title">Upcoming Checkins</h6>
          <div className="heading-elements">
          </div>
        <a className="heading-elements-toggle"><i className="icon-more"></i></a></div>

        <div className="panel-body">
          <div id="sales-heatmap"></div>
        </div>

        <div className="table-responsive">
          <table className="table text-nowrap">
            <thead>
              <tr>
                <th><b>House</b></th>
                <th><b>Date Start</b></th>
                <th><b>Name</b></th>
              </tr>
            </thead>
            <tbody>
            { bookings.map((item) => (
              <Booking key={ item.id } booking={ item } />
              )) }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Bookings.propTypes = {
  bookings: PropTypes.array
};

