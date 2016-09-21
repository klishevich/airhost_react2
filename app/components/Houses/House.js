import React, { Component, PropTypes } from 'react'
import Bookings from 'components/Bookings'

export default class House extends Component {
  render() {
    const { house, houseBookings } = this.props
    console.log('House', this.props)
    const ref = '/houses/' + house.id
    return (
      <div className="content-wrapper">
        <div className="row">
          <div className="col-lg-8">
            <div className="panel panel-flat border-top-primary">
              <div className="panel-heading">
                <h6 className="panel-title">{ house.name }</h6>
                <div className="heading-elements">
                  <form className="heading-form" action="#">
                    <div className="form-group">
                      <label className="checkbox-inline checkbox-switchery checkbox-right switchery-xs">
                        <input type="checkbox" className="switch" checked="checked" data-switchery="true" style={ { display: 'none' } }/>
                          <span className="switchery switchery-default" style={ { backgroundColor: 'rgb(76, 175, 80)', borderColor: 'rgb(76, 175, 80)', boxShadow: 'rgb(76, 175, 80) 0px 0px 0px 8px inset', transition: 'border 0.4s, box-shadow 0.4s, background-color 1.2s' } }>
                            <small style={ { left: '14px', backgroundColor: 'rgb(255, 255, 255)', transition: 'background-color 0.4s, left 0.2s' } } >
                            </small>
                          </span>
                        Status:
                      </label>
                    </div>
                  </form>
                  <div className="btn-group">
                   <button type="button" className="btn btn-primary dropdown-toggle legitRipple" data-toggle="dropdown"><i className="icon-cog5 position-left"></i> Dropdown <span className="caret"></span></button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li><a href="#"><i className="icon-mail-read"></i> Auto Message</a></li>
                      <li><a href="#"><i className="icon-price-tag"></i> Pricing</a></li>
                      <li><a href="#"><i className="icon-statistics"></i> Statistics</a></li>
                      <li><a href="#"><i className="icon-woman"></i> Cleaner</a></li>
                      <li className="divider"></li>
                      <li><a href="#"><i className="icon-cross3"></i> Disable</a></li>
                    </ul>
                  </div>
                </div>
              <a className="heading-elements-toggle"><i className="icon-more"></i></a></div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <div className="thumbnail">
                      <a href={ ref } className="thumb">
                        <img src={ house.photo } className="img-circle" alt=""/>
                      </a>
                    </div>
                  </div>    
                  <div className="col-sm-2 col-xs-4 text-center">
                    <div className="content-group-sm svg-center position-relative" id="seven-days-chart">
                    </div>
                  </div>
                  <div className="col-sm-2 col-xs-4 text-center">
                    <div className="content-group-sm svg-center position-relative" id="fifteen-days-chart">
                    </div>
                  </div>
                  <div className="col-sm-2 col-xs-4 text-center">
                    <div className="content-group-sm svg-center position-relative" id="thirty-days-chart">
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
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
                      <th><b>Status</b></th>
                      <th><b>Date Start</b></th>
                      <th><b>Name</b></th>
                    </tr>
                  </thead>
                  <Bookings bookings={ houseBookings }/>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

House.propTypes = {
  house: PropTypes.object.isRequired,
  houseBookings: PropTypes.array.isRequired
}