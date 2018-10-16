import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { Menu, Container, Segment } from 'semantic-ui-react'

import Payment from './Payment'

class Header extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderContent() {
    switch (this.props.authReducer) {
      case null:
              console.log('null');
        return <Menu.Item
          name='deciding'
        />
      case false:
              console.log('false');
        return <Menu.Item
          name='login'
          href='/auth/google'
        />
      default:
        return [
          <Menu.Item key={0}>Credits: {this.props.authReducer.credits}</Menu.Item>,
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
      <Segment basic inverted color="teal">
          <Container>
            <Menu secondary inverted>
              <Menu.Item name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                as={Link} to='/'
              />
              <Menu.Item
                name='New Survey'
                active={activeItem === 'New Survey'}
                onClick={this.handleItemClick}
                as={Link} to='/surveys/new'
              />
              <Menu.Item
                name='draft'
                active={activeItem === 'draft'}
                onClick={this.handleItemClick}
                as={Link} to='/draft'
              />
              <Menu.Item
                name='list'
                active={activeItem === 'list'}
                onClick={this.handleItemClick}
                as={Link} to='/surveys'
              />

              <Menu.Menu position='right'>
                {this.renderContent()}
              </Menu.Menu>
            </Menu>
          </Container>
      </Segment>
    )
  }
}

const mapStateToProps = ({ authReducer }) => {
  return { authReducer }
}
export default connect(mapStateToProps)(Header)
