import React, { Component, PropTypes } from 'react'

import House from './House'

export default class Houses extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('Houses component', this.props)
    const { houses } = this.props
    return (
      <div>
        <div>
        { houses.map((item) => (
            <House key={ item.id } house={ item } />
          )) }
      </div>
      </div>
    )
  }
}

Houses.propTypes = {
  houses: PropTypes.array.isRequired
}

