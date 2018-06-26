import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Menu pointing>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Link to='/services'>
            <Menu.Item name='services' />
          </Link>
          <Link to='/services/lashes'>
            <Menu.Item name='eyelash extensions' />
          </Link>
          <Link to='/contact'>
            <Menu.Item name='contact' />
          </Link>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);
