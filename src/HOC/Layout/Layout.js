import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Layout.scss'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <header className="layout-header">
          CRA starter kit
        </header>
        <section className="layout-content">
          {this.props.children}
        </section>
        <footer className="layout-footer">
          Footer
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



