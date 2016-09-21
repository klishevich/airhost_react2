import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Helmet from 'react-helmet'

import messages from './messages'
import { createStructuredSelector } from 'reselect'

import {
  selectRepos,
  selectLoading,
  selectError,
} from 'containers/App/selectors'

import {
  selectUsername,
  selectBookings,
  selectHouses
} from './selectors'

import { changeUsername, getBookings, getHouses } from './actions'
import { loadRepos } from '../App/actions'

import { FormattedMessage } from 'react-intl'
import RepoListItem from 'containers/RepoListItem'
import Button from 'components/Button'
import H1 from 'components/H1'
import H2 from 'components/H2'
import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'
import Bookings from 'components/Bookings'
import Houses from 'components/Houses'
import PageHeader from 'components/PageHeader'

import styles from './styles.css'

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.getBookings()
    this.props.getHouses()
  }
  openRoute = (route) => {
    this.props.changeRoute(route)
  };

  openFeaturesPage = () => {
    this.openRoute('/features')
  };

  render() {    
    // console.log('HomePage', this.props)
    const houses = this.props.houses || [];
    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}/>
        <div>
          <PageHeader title='Home - Dashboard' subtitle='Good morning, Obatake Takashi!'/>
          <div className="page-container" style={ {minHeight:'306px'} }>
            <div className="page-content">
              <Houses houses={ houses }/>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

HomePage.propTypes = {
  changeRoute: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
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
  loading: selectLoading(),
  error: selectError(),
  bookings: selectBookings(),
  houses: selectHouses(),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
