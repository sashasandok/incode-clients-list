// react
import React, { Component } from 'react'
// import PropTypes from 'prop-types'

//redux
import { connect } from 'react-redux'

// components
import SideBar from '../../components/SideBar/SideBar'

// hoc's
import Layout from '../../HOC/Layout/Layout'

// styles
import './Main.scss'

// actions
import { getUsers } from '../../actions/users'

class Main extends Component {
  render() {
    return (
      <Layout>
        <div className="main-wrapper">
          <SideBar />
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
})

const mapDispatchToProps = dispatch => () => dispatch(getUsers())

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)
