import React, { Component, PropTypes } from 'react'
import TimelineDate from 'components/Timeline/TimelineDate'
import TimelineRow from 'components/Timeline/TimelineRow'

export default class HouseDetails extends Component {
  render() {
    console.log('HouseDetails', this.props)
    const { house } = this.props
    const bg_img = `url(${house.photo})`
    return (
      <div className="page-container" style={{minHeight:'299px'}}>
        <div className="page-content">
          <div className="content-wrapper">
            <div className="profile-cover">
              <div className="profile-cover-img" style={{backgroundImage: bg_img}}></div>
              <div className="media">
                <div className="media-left">
                  <a href="#" className="profile-thumb">
                    <img src="https://a2.muscache.com/im/pictures/e54fe5bb-674e-4d1f-afd7-b995a38944b3.jpg?aki_policy=profile_x_medium" className="img-circle" alt=""/>
                  </a>
                </div>
                <div className="media-body">
                    <h1>{house.name} <small className="display-block">Takayo</small></h1>
                </div>
                <div className="media-right media-middle">
                  <ul className="list-inline list-inline-condensed no-margin-bottom text-nowrap">
                    <li><a href="#" className="btn btn-default legitRipple"><i className="icon-file-stats position-left"></i> Statistics</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="navbar navbar-default navbar-xs navbar-component no-border-radius-top">
              <ul className="nav navbar-nav visible-xs-block">
                <li className="full-width text-center"><a data-toggle="collapse" data-target="#navbar-filter" className="legitRipple"><i className="icon-menu7"></i></a></li>
              </ul>
              <div className="navbar-collapse collapse" id="navbar-filter">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#activity" data-toggle="tab" className="legitRipple"><i className="icon-mail-read position-left"></i> Auto Messages</a></li>
                  <li><a href="#cleaner" data-toggle="tab" className="legitRipple"><i className="icon-woman position-left"></i> Cleaner</a></li>
                  <li><a href="#pricing" data-toggle="tab" className="legitRipple"><i className="icon-price-tag position-left"></i> Pricing</a></li>
                </ul>
                <div className="navbar-right">
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-9">
                <div className="tabbable">
                  <div className="tab-content">
                    <div className="tab-pane fade in active" id="activity">
                      <div className="timeline-left content-group">
                        <div className="timeline-container">
                          <TimelineDate dateText='Once Booking is made'/>
                          <TimelineRow 
                            bg='bg-primary-400'
                            icon='icon-stack-text'
                            messageType='Welcome Message'
                            messageContent={ house.welcome_msg }
                            messageDescription= 'Message send to user when the booking is first made'/>
                          <TimelineDate dateText='6:00PM, One day before checkin'/>
                          <TimelineRow 
                            bg='bg-teal-400' 
                            icon='icon-airplane2'
                            messageType='Checkin Reminder'
                            messageContent={ house.tmr_checkin_reminder_msg }
                            messageDescription= 'Message sent one day before checkin'/>
                          <TimelineDate dateText='6:00PM, Same Checkin Date'/>
                          <TimelineRow 
                            bg='bg-info-400'
                            icon='icon-airplane4'
                            messageType='Arriving Message'
                            messageContent={ house.checkin_today_msg }
                            messageDescription= 'Message sent to make sure guest arrived safely'/>
                          <TimelineDate dateText='12:00AM, One day before checkout'/>
                          <TimelineRow 
                            bg='bg-warning-400'
                            icon='icon-airplane3'
                            messageType='Checkout Message'
                            messageContent={ house.checkout_reminder_msg }
                            messageDescription= 'Message sent to remind guest on checkout time'/>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="cleaner">
                      <div className="panel panel-flat">
                        <div className="panel-heading">
                          <h6 className="panel-title">Cleaner</h6>
                          <div className="heading-elements">
                            <div className="heading-btn">
                              <button type="button" className="btn btn-info btn-icon legitRipple"><i className="icon-plus3"></i> Add Cleaner</button>
                            </div>
                          </div>
                        <a className="heading-elements-toggle"><i className="icon-more"></i></a></div>
                        <div className="panel-body">
                          <form action="#">
                            <div className="form-group">
                              <label>Select a cleaner</label>
                              <select className="select select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
                                <option value="AZ">Jack</option>
                                <option value="CO">Tom</option>
                                <option value="ID">Wayne</option>
                                <option value="WY">Annie</option>
                              </select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-bvsi-container"><span className="select2-selection__rendered" id="select2-bvsi-container" title="Jack">Jack</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                              <span className="help-block">All the new bookings will be assigned to</span>
                            </div>
                            <div className="text-right">
                              <button type="submit" className="btn btn-primary legitRipple">Save <i className="icon-arrow-right14 position-right"></i></button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="panel panel-flat">
                        <div className="panel-heading">
                          <h6 className="panel-title">New Cleaner</h6>
                          <div className="heading-elements">
                            <ul className="icons-list">
                              <li><a data-action="collapse"></a></li>
                              <li><a data-action="close"></a></li>
                            </ul>
                          </div>
                        <a className="heading-elements-toggle"><i className="icon-more"></i></a></div>
                        <div className="panel-body">
                          <form action="#">
                            <div className="form-group">
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Username</label>
                                  <input type="text" value="Eugene" className="form-control"/>
                                </div>
                                <div className="col-md-6">
                                  <label>Full name</label>
                                  <input type="text" value="Kopyov" className="form-control"/>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Email</label>
                                  <input type="text" readOnly="readOnly" value="eugene@kopyov.com" className="form-control"/>
                                </div>
                                <div className="col-md-6">
                                  <label>Phone #</label>
                                  <input type="text" value="+99-99-9999-9999" className="form-control"/>
                                  <span className="help-block">+99-99-9999-9999</span>                                            
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <button type="submit" className="btn btn-primary legitRipple">Save <i className="icon-arrow-right14 position-right"></i></button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pricing">
                      <div className="panel panel-flat">
                        <div className="panel-heading">
                          <h6 className="panel-title">My schedule</h6>
                          <div className="heading-elements">
                            <ul className="icons-list">
                              <li><a data-action="collapse"></a></li>
                              <li><a data-action="reload"></a></li>
                              <li><a data-action="close"></a></li>
                            </ul>
                          </div>
                        <a className="heading-elements-toggle"><i className="icon-more"></i></a></div>
                        <div className="panel-body">
                          <div className="schedule fc fc-ltr fc-unthemed"><div className="fc-toolbar"><div className="fc-left"><div className="fc-button-group"><button type="button" className="fc-prev-button fc-button fc-state-default fc-corner-left legitRipple"><span className="fc-icon fc-icon-left-single-arrow"></span></button><button type="button" className="fc-next-button fc-button fc-state-default fc-corner-right legitRipple"><span className="fc-icon fc-icon-right-single-arrow"></span></button></div><button type="button" className="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right legitRipple">today</button></div><div className="fc-right"><div className="fc-button-group"><button type="button" className="fc-month-button fc-button fc-state-default fc-corner-left fc-state-active legitRipple">month</button><button type="button" className="fc-agendaWeek-button fc-button fc-state-default legitRipple">week</button><button type="button" className="fc-agendaDay-button fc-button fc-state-default fc-corner-right legitRipple">day</button></div></div><div className="fc-center"><h2>&nbsp;</h2></div><div className="fc-clear"></div></div><div className="fc-view-container"><div className="fc-view fc-month-view"></div></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="panel panel-flat">
                  <div className="panel-heading">
                    <h6 className="panel-title">Auto Message Logs</h6>
                    <div className="heading-elements">
                    </div>
                  <a className="heading-elements-toggle"><i className="icon-more"></i></a></div>
                  <div className="panel-body">
                    <ul className="media-list">
                      <li className="media">
                        <div className="media-left">
                          <a href="#" className="btn border-pink text-pink btn-flat btn-rounded btn-icon btn-xs legitRipple"><i className="icon-stack-text"></i></a>
                        </div>
                        <div className="media-body">
                          John Smith
                          <div className="media-annotation">Dec 18, 18:36</div>
                        </div>
                        <div className="media-right media-middle">
                          <ul className="icons-list">
                            <li>
                              <a href="#"><i className="icon-attachment"></i></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-left">
                          <a href="#" className="btn border-success text-success btn-flat btn-rounded btn-icon btn-xs legitRipple"><i className="icon-airplane2"></i></a>
                        </div>
                        <div className="media-body">
                          Sally Lin
                          <div className="media-annotation">Dec 18, 18:36</div>
                        </div>
                        <div className="media-right media-middle">
                          <ul className="icons-list">
                            <li>
                                <a href="#"><i className="icon-attachment"></i></a>
                              </li>
                            </ul>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-left">
                          <a href="#" className="btn border-primary text-primary btn-flat btn-rounded btn-icon btn-xs legitRipple"><i className="icon-airplane3"></i></a>
                        </div>
                        <div className="media-body">
                          <div className="media-body">
                            Will Smith
                            <div className="media-annotation">Dec 18, 18:36</div>
                          </div>
                        </div>
                        <div className="media-right media-middle">
                          <ul className="icons-list">
                            <li>
                              <a href="#"><i className="icon-attachment"></i></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-left">
                          <a href="#" className="btn border-warning-400 text-warning-400 btn-flat btn-rounded btn-icon btn-xs legitRipple"><i className="icon-airplane4"></i></a>
                        </div>
                        <div className="media-body">
                          Wolfgang Perk
                          <div className="media-annotation">4 minutes ago</div>
                        </div>
                        <div className="media-right media-middle">
                          <ul className="icons-list">
                            <li>
                              <a href="#"><i className="icon-attachment"></i></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-left">
                          <a href="#" className="btn border-teal-400 text-teal btn-flat btn-rounded btn-icon btn-xs legitRipple"><i className="icon-stack-text"></i></a>
                        </div>
                        <div className="media-body">
                          James Bond
                          <div className="media-annotation">Dec 12, 05:46</div>
                        </div>
                        <div className="media-right media-middle">
                          <ul className="icons-list">
                            <li>
                                <a href="#"><i className="icon-attachment"></i></a>
                              </li>
                            </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

HouseDetails.propTypes = {
  house: PropTypes.object.isRequired
}