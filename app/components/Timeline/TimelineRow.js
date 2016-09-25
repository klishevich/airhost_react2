import React, { Component, PropTypes } from 'react'

export default class TimelineRow extends Component {
  render() {
    const { bg, icon, messageType, messageContent, messageDescription } = this.props
    return (
      <div className="timeline-row">
        <div className="timeline-icon">
          <div className={ bg }>
            <i className={ icon }></i>
          </div>
        </div>
        <div className="panel panel-flat timeline-content">
          <div className="panel-heading">
            <h6 className="panel-title">{ messageType }</h6>
            <div className="heading-elements">
              <form className="heading-form" action="#">
                <div className="form-group">
                  <label className="checkbox-inline checkbox-switchery checkbox-right switchery-xs">
                    <input type="checkbox" className="switch" checked="checked" data-switchery="true" style={{display: 'none'}}/>
                    <span className="switchery switchery-default" style={{backgroundColor: 'rgb(76, 175, 80)', borderColor: 'rgb(76, 175, 80)', boxShadow: 'rgb(76, 175, 80) 0px 0px 0px 8px inset', transition: 'border 0.4s, box-shadow 0.4s, background-color 1.2s'}}>
                      <small style={{left: '14px', backgroundColor: 'rgb(255, 255, 255)', transition: 'background-color 0.4s, left 0.2s'}}></small>
                    </span>
                    Enable:
                  </label>
                </div>
              </form>
            </div>
          <a className="heading-elements-toggle"><i className="icon-more"></i></a></div>
          <div className="panel-body">
            <div className="form-group">
              <label className="control-label col-lg-2"></label>
              <div className="col-lg-10">
                <textarea rows="5" cols="5" className="form-control" placeholder={ messageType } value={ messageContent }></textarea>
                <span className="help-block">{ messageDescription }</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TimelineRow.propTypes = {
  bg: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired,
  messageContent: PropTypes.string,
  messageDescription: PropTypes.string.isRequired, 
}