// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// semantic-ui
import { Image, Input } from 'semantic-ui-react'

// hoc's
import Layout from '../../HOC/Layout/Layout'

// styles
import './Main.css'

// selectors
import { getClientList, getClientById } from '../../selectors/clientsSelector'

// actions
import { getClients, filterClients } from '../../actions/clients'

// components
import ClientInfo from '../../components/ClientInfo/ClientInfo'

class Main extends Component {
  state = {
    clientId: '',
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
            <span className="search-input">
              <Input
                icon="search"
                onChange={this.onInputChange}
                placeholder="search"
                fluid
                transparent={true}
              />
            </span>
            <div>
              {searchResult.length === 0
                ? clients.map((client, index) => {
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
          <ClientInfo
            clients={clients}
            clientId={this.state.clientId}
            client={this.props.client}
          />
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  clients: getClientList(state),
  client: getClientById(state.clientId),
  searchResult: state.clients.result,
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
  client: PropTypes.instanceOf(Object),
  searchResult: PropTypes.string.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)
