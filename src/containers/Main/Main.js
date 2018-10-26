// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// semantic-ui
import { Image } from 'semantic-ui-react'

// hoc's
import Layout from '../../HOC/Layout/Layout'

// styles
import './Main.css'

// selectors
import {
  getClientList,
  getClientSearchResult,
} from '../../selectors/clientsSelector'

// actions
import { getClients, filterClients } from '../../actions/clients'

// components
import ClientInfo from '../ClientInfo/ClientInfo'

class Main extends Component {
  state = {
    clientId: '',
  }

  componentDidMount = () => {
    this.props.getClients()
  }

  componentDidUpdate = () => {
    if (!this.state.clientId) {
      const clientId = this.props.clients[0] && this.props.clients[0].id
      this.setState({ clientId: clientId })
    }
  }

  onClientClick = id => {
    this.setState({ clientId: id })
  }

  onInputChange = evt => {
    this.props.filterClients(evt.target.value)
  }

  render() {
    const { clients, searchResult } = this.props
    return (
      <Layout>
        <div className="main-wrapper">
          <div className="sidebar">
            <input
              className="search-input"
              onChange={this.onInputChange}
              placeholder="search"
            />

            <div>
              {searchResult.length === 0
                ? clients.map((client, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        this.state.clientId === client.id
                          ? 'client-item-selected'
                          : 'client-item'
                      }
                      onClick={() => this.onClientClick(client.id)}
                    >
                      <Image
                        alt="Image"
                        src={client.avatar}
                        width={50}
                        height={50}
                      />
                      <span className="client-name">
                        <h3>
                          {client.firstName} {client.lastName}
                        </h3>
                        <span>{client.title}</span>
                      </span>
                    </div>
                  )
                })
                : clients
                  .filter(i => {
                    const searchStr = `${i.firstName} ${i.lastName} ${
                      i.title
                    }`
                    return searchStr.toLowerCase().includes(searchResult)
                  })
                  .map((client, index) => {
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
          <ClientInfo clientId={this.state.clientId} selected={clients[0]} />
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  clients: getClientList(state),
  searchResult: getClientSearchResult(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getClients,
      filterClients,
    },
    dispatch,
  )

Main.propTypes = {
  getClients: PropTypes.func.isRequired,
  filterClients: PropTypes.func.isRequired,
  clients: PropTypes.instanceOf(Array),
  searchResult: PropTypes.string.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)
