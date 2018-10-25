// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// semantic-ui
import { Image } from 'semantic-ui-react'

// styles
import './ClientInfo.css'

class ClientInfo extends Component {
  render() {
    const { clients } = this.props
    return (
      <div className="info-block">
        {clients.filter(i => i.id === this.props.clientId).map(client => {
          return (
            <div className="card" key={client.id}>
              <div className="card-client-name">
                <Image src={client.avatar} width={128} height={128} />
                <div>
                  <h1>
                    {client.firstName} {client.lastName}
                  </h1>
                  <p>
                    {client.title}-{client.company}
                  </p>
                </div>
              </div>
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
          )
        })}
      </div>
    )
  }
}

ClientInfo.propTypes = {
  clients: PropTypes.instanceOf(Array),
  clientId: PropTypes.string.isRequired,
}

export default ClientInfo
