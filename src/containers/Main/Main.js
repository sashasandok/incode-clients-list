// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

//redux
import { connect } from 'react-redux'

// semantic-ui
import { Image, Input } from 'semantic-ui-react'

// hoc's
import Layout from '../../HOC/Layout/Layout'

// styles
import './Main.css'

// actions
import { getClients, filterClients } from '../../actions/clients'

class Main extends Component {
  state = {
    clientId: null,
  }

  componentDidMount = () => {
    this.props.getClients()
  }

  onClientClick = id => {
    this.setState({ clientId: id })
  }

  onInputChange = evt => {
    this.props.filterClients(evt.target.value)
    console.log(evt.target.value)
  }

  render() {
    const { clients, searchResult } = this.props

    return (
      <Layout>
        <div className="main-wrapper">
          <div className="sidebar">
            <div className="search-input">
              <Input
                icon="search"
                onChange={this.onInputChange}
                placeholder="search"
              />
              {searchResult}
            </div>
            <div>
              {clients.map((client, index) => {
                return (
                  <div
                    key={index}
                    className="client-item"
                    onClick={() => this.onClientClick(client.id)}
                  >
                    <Image
                      alt="Image"
                      src={client.avatar}
                      width={50}
                      height={50}
                    />
                    <p className="client-name">
                      <span>
                        {client.firstName} {client.lastName}
                      </span>
                      <span>{client.title}</span>
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="info-block">
            {clients.filter(i => i.id === this.state.clientId).map(client => {
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
                    <span>country: {client.country}</span>
                    <span>city: {client.city}</span>
                    <span>street: {client.street}</span>
                    <span>zip code: {client.zipCode}</span>
                    <h2>contacts</h2>
                    <span>phone: {client.phone}</span>
                    <span>email: {client.email}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  clients: state.clients.clients,
  searchResult: state.clients.result,
})

const mapDispatchToProps = dispatch => ({
  getClients: () => dispatch(getClients()),
  filterClients: () => dispatch(filterClients()),
})

Main.propTypes = {
  getClients: PropTypes.func.isRequired,
  filterClients: PropTypes.func.isRequired,
  clients: PropTypes.instanceOf(Array),
  client: PropTypes.instanceOf(Object),
  searchResult: PropTypes.string.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)
