import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Helmet from 'react-helmet'

import messages from './messages'
import { createStructuredSelector } from 'reselect'
import { FormattedMessage } from 'react-intl'
import Button from 'components/Button'
import H1 from 'components/H1'
import H2 from 'components/H2'
import HouseDetails from 'components/Houses/HouseDetails'
import { getBookings, getHouses } from 'containers/HomePage/actions'
import Bookings from 'components/Bookings'
import PageHeader from 'components/PageHeader'
import { getHouse, getHouseBookings } from 'utils/house'

import styles from './styles.css'

import {
  selectBookings,
  selectHouses
} from 'containers/HomePage/selectors'

export class HousePage extends React.Component {
  componentDidMount() {
    this.props.getBookings()
    this.props.getHouses()
  }

  openRoute = (route) => {
    this.props.changeRoute(route)
  }

  openHomePage = () => {
    this.openRoute('/')
  }

  render() {
    console.log('HousePage', this.props)
    const house_id = this.props.params ? this.props.params.id : -1
    const house = getHouse(house_id, this.props.houses)
    const houseBookings = getHouseBookings(house_id, this.props.bookings)

    return (
      <div>
        <Helmet
          title="House Details Page"
          meta={[
            { name: 'description', content: 'House Details Page' },
          ]}/>
        <PageHeader title='House - Dashboard' subtitle='House > User pages > Profile cover'/>
        <H1>
          House
        </H1>
        <H2>House Details</H2>
        <HouseDetails house={house}/>
        <Button handleRoute={this.openHomePage}>
          Back to Houses List
        </Button>
        <H2>House Bookings</H2>
        <Bookings bookings={houseBookings}/>
        <Button handleRoute={this.openHomePage}>
          Back to Houses List
        </Button>
      </div>
    )
  }
}
HousePage.propTypes = {
  changeRoute: React.PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    getBookings: () => dispatch(getBookings()),
    getHouses: () => dispatch(getHouses()),
    dispatch,
  }
}

const mapStateToProps = createStructuredSelector({
  bookings: selectBookings(),
  houses: selectHouses(),
})

export default connect(mapStateToProps, mapDispatchToProps)(HousePage)
