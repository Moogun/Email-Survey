import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { Input, Menu, Container } from 'semantic-ui-react'

import Payment from './Payment'

class Header extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderContent() {
    switch (this.props.authReducer) {
      case null:
        return <Menu.Item
          name='deciding'
        />
      case false:
        return <Menu.Item
          name='login'
          href='/auth/google'
        />
      default:
        return [
          <Menu.Item key={1}><Payment /></Menu.Item>,
          <Menu.Item key={2}
            name='logout'
            href='/api/logout'
          />
        ]
    }
  }
  render() {
    const { activeItem } = this.state

    console.log('auth', this.props.authReducer);

    return (
      <Container>
        <Menu secondary>
          <Menu.Item name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={Link} to='/'
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            {this.renderContent()}
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
}

const mapStateToProps = ({ authReducer }) => {
  return { authReducer }
}
export default connect(mapStateToProps)(Header)
