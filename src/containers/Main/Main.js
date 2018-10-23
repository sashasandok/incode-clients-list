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
  componentDidMount = () => {
    this.props.getUsers()
  }

  render() {
    const { users } = this.props
    console.log(this.props)
    return (
      <Layout>
        <div className="main-wrapper">
          <SideBar users={users} />
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)
