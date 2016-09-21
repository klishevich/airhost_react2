import React, { Component, PropTypes } from 'react'

export default class House extends Component {
  render() {
    const { house } = this.props
    const ref = '/houses/' + house.id
    return (
      <div className="content-wrapper">
        <div className="row">
          <div className="col-lg-8">
            <div className="panel panel-flat border-top-primary">
              <div className="panel-heading">
                <h6 className="panel-title">AH 1 Bedroom Apartment in Kyoto No 8</h6>
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
                      <a href="#" className="thumb">
                        <img src="https://a2.muscache.com/im/pictures/20e36af2-c3cb-49f9-883a-ce1cebc79b5c.jpg?aki_policy=small" className="img-circle" alt=""/>
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
                      <th>House</th>
                      <th>Name</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="media-left media-middle">
                          <img src="https://a2.muscache.com/im/pictures/20e36af2-c3cb-49f9-883a-ce1cebc79b5c.jpg?aki_policy=small" className="img-circle img-xs" alt=""/>
                        </div>

                        <div className="media-body">
                          <div className="media-heading">
                            <a href="#" className="letter-icon-title">Kyoto No 8</a>
                          </div>

                          <div className="text-muted text-size-small">Agoda</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted text-size-small">Ziwei Zhou</span>
                      </td>
                      <td>
                        <h6 className="text-semibold no-margin">2016-02-28</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="media-left media-middle">
                          <img src="https://a2.muscache.com/im/pictures/20e36af2-c3cb-49f9-883a-ce1cebc79b5c.jpg?aki_policy=small" className="img-circle img-xs" alt=""/>
                        </div>

                        <div className="media-body">
                          <div className="media-heading">
                            <a href="#" className="letter-icon-title">Kyoto No 8</a>
                          </div>

                          <div className="text-muted text-size-small">自在客</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted text-size-small">Meryl Zhou</span>
                      </td>
                      <td>
                        <h6 className="text-semibold no-margin">2016-03-1</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media-left media-middle">
                          <img src="https://a2.muscache.com/im/pictures/20e36af2-c3cb-49f9-883a-ce1cebc79b5c.jpg?aki_policy=small" className="img-circle img-xs" alt=""/>
                        </div>

                        <div className="media-body">
                          <div className="media-heading">
                            <a href="#" className="letter-icon-title">Kyoto No 8</a>
                          </div>

                          <div className="text-muted text-size-small">Airbnb</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted text-size-small">Kenichi Izawa</span>
                      </td>
                      <td>
                        <h6 className="text-semibold no-margin">2016-03-5</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media-left media-middle">
                          <img src="https://a2.muscache.com/im/pictures/20e36af2-c3cb-49f9-883a-ce1cebc79b5c.jpg?aki_policy=small" className="img-circle img-xs" alt=""/>
                        </div>

                        <div className="media-body">
                          <div className="media-heading">
                            <a href="#" className="letter-icon-title">Kyoto No 2</a>
                          </div>

                          <div className="text-muted text-size-small">Agoda</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted text-size-small">Takashi Obatake</span>
                      </td>
                      <td>
                        <h6 className="text-semibold no-margin">2016-03-10</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media-left media-middle">
                          <img src="https://a2.muscache.com/im/pictures/20e36af2-c3cb-49f9-883a-ce1cebc79b5c.jpg?aki_policy=small" className="img-circle img-xs" alt=""/>
                        </div>

                        <div className="media-body">
                          <div className="media-heading">
                            <a href="#" className="letter-icon-title">Kyoto No 8</a>
                          </div>

                          <div className="text-muted text-size-small">Airbnb</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted text-size-small">Audrey Pang</span>
                      </td>
                      <td>
                        <h6 className="text-semibold no-margin">2016-03-14</h6>
                      </td>
                    </tr>
                  </tbody>
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
  house: PropTypes.object.isRequired
}