// react
import React from 'react'

// styles
import './SideBar.scss'

// semantic ui
import { Image } from 'semantic-ui-react'

const SideBar = props => {
  return (
    <div className="sidebar">
      <p>Search</p>
      <div>
        {props.users.map((user, index) => {
          return (
            <div key={index} className="user-item">
              <Image alt="Image" src={user.general.avatar} />
              <p className="user-name">
                <span>{user.general.firstName}</span>
                <span>{user.general.lastName}</span>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar
