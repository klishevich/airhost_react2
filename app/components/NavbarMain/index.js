import React, { Component, PropTypes } from 'react'

export default class NavbarMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar navbar-inverse bg-teal">
        <div className="navbar-header">
          <a className="navbar-brand" href="/"><img src="/assets/images/airhost_logo2.svg" alt=""/></a>

          <ul className="nav navbar-nav pull-right visible-xs-block">
            <li><a data-toggle="collapse" data-target="#navbar-mobile" className="legitRipple"><i className="icon-tree5"></i></a></li>
          </ul>
        </div>
        <div className="navbar-collapse collapse" id="navbar-mobile">
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown language-switch">
            <a className="dropdown-toggle legitRipple" data-toggle="dropdown">
              <img src="/assets/images/flags/gb.png" className="position-left" alt=""/>
              English
              <span className="caret"></span>
            </a>

            <ul className="dropdown-menu">
              <li><a className="deutsch"><img src="/assets/images/flags/de.png" alt=""/> Deutsch</a></li>
              <li><a className="ukrainian"><img src="/assets/images/flags/ua.png" alt=""/> Українська</a></li>
              <li><a className="english"><img src="/assets/images/flags/gb.png" alt=""/> English</a></li>
              <li><a className="espana"><img src="/assets/images/flags/es.png" alt=""/> España</a></li>
              <li><a className="russian"><img src="/assets/images/flags/ru.png" alt=""/> Русский</a></li>
            </ul>
          </li>

          <li className="dropdown dropdown-user">
            <a className="dropdown-toggle legitRipple" data-toggle="dropdown" aria-expanded="false">
              <img src="https://secure.gravatar.com/avatar/ad4a1f3a72da67c5a6b4141df6588836?s=128" alt=""/>
              <span>Ziwei</span>
              <i className="caret"></i>
            </a>

            <ul className="dropdown-menu dropdown-menu-right">
              <li><a href="#"><i className="icon-user-plus"></i> My profile</a></li>
              <li className="divider"></li>
              <li><a href="#"><i className="icon-cog5"></i> Account settings</a></li>
              <li><a href="#"><i className="icon-switch2"></i> Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    );
  }
}
