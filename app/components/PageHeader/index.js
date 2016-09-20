import React, { Component, PropTypes } from 'react'

export default class PageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, subtitle } = this.props
    return (
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-title">
            <h4>
              <i className="icon-arrow-left52 position-left"></i>
              <span className="text-semibold">{ title }</span>
              <small className="display-block">{ subtitle }</small>
            </h4>
          </div>

          <div className="heading-elements">
            <div className="heading-btn-group">
              <a href="#" className="btn btn-link btn-float has-text text-size-small legitRipple"><i className="icon-user-plus text-indigo-400"></i><span>Add Account</span></a>
            </div>
          </div>
        <a className="heading-elements-toggle"><i className="icon-more"></i></a></div>
      </div>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};