// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//redux
import { connect } from 'react-redux'

import { getClientById } from '../../selectors/clientsSelector'

// styles
import './ClientInfo.css'

class ClientInfo extends Component {
  render() {
    const { client } = this.props

    if (!client) return null

    return (
      <div className="info-block">
        <div className="card" key={client.id}>
          <div className="card-client-name">
            <img src={client?.avatar} alt="Avatar" />
            <div>
              <h1>
                {client.firstName} {client.lastName}
              </h1>
              <p>
                {client.title}
                &nbsp;&nbsp; &mdash; &nbsp;&nbsp;
                {client.company}
              </p>
            </div>
          </div>
          <div className="divider" />
          <div className="card-contacts">
            <h2>address</h2>
            <span>
              <h3>country</h3>: {client.country}
            </span>
            <span>
              <h3>city</h3>: {client.city}
            </span>
            <span>
              <h3>street</h3>: {client.street}
            </span>
            <span>
              <h3>zip code</h3>: {client.zipCode}
            </span>
            <h2>contacts</h2>
            <span>
              <h3>phone</h3>: {client.phone}
            </span>
            <span>
              <h3>email</h3>: {client.email}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

ClientInfo.propTypes = {
  clientId: PropTypes.string,
  client: PropTypes.object,
}

const mapStateToProps = (state, props) => ({
  client: getClientById(props.clientId)(state),
})

export default connect(mapStateToProps)(ClientInfo)
