import React, { Component, PropTypes } from 'react'

export default class NavbarSecond extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar navbar-default" id="navbar-second">
        <ul className="nav navbar-nav no-border visible-xs-block">
          <li><a className="text-center collapsed legitRipple" data-toggle="collapse" data-target="#navbar-second-toggle"><i className="icon-menu7"></i></a></li>
        </ul>

        <div className="navbar-collapse collapse" id="navbar-second-toggle">
          <ul className="nav navbar-nav navbar-nav-material">
            <li className="active"><a href="/" className="legitRipple"><i className="icon-display4 position-left"></i> Dashboard</a></li>

            <li>
              <a href="#" className="legitRipple"><i className="icon-calendar position-left"></i> Cleaning Calendar</a>
            </li>
            <li>
              <a href="#" className="legitRipple"><i className="icon-chart position-left"></i> Booking Chart</a>
            </li>
            <li>
              <a href="#" className="legitRipple"><i className="icon-stats-bars4 position-left"></i> Booking Heatmap<span className="legitRipple-ripple"></span></a>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-nav-material navbar-right">

            <li className="dropdown">
              <a href="#" className="dropdown-toggle legitRipple" data-toggle="dropdown">
                <i className="icon-cog3"></i>
                <span className="visible-xs-inline-block position-right">Share</span>
                <span className="caret"></span>
              </a>

              <ul className="dropdown-menu dropdown-menu-right">
                <li><a href="#"><i className="icon-user-lock"></i> Account security</a></li>
                <li><a href="#"><i className="icon-statistics"></i> Analytics</a></li>
                <li><a href="#"><i className="icon-accessibility"></i> Accessibility</a></li>
                <li className="divider"></li>
                <li><a href="#"><i className="icon-gear"></i> All settings</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
