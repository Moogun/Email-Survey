import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { Menu, Container, Segment } from 'semantic-ui-react'

import Payment from './Payment'

class Header extends Component {

  renderContent(activeItem, handleItemClick) {
    switch (this.props.auth) {
      case null:
          return <Menu secondary inverted> </Menu>
      case false :
          return <NonAuthMenu />
      default :
          return <AuthMenu auth={this.props.auth}/>
    }
  }
  render() {
    console.log(this.props);
    return (
      <Segment basic inverted color="teal">
          <Container>
            {this.renderContent()}
          </Container>
      </Segment>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}
export default connect(mapStateToProps)(Header)

class AuthMenu  extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        console.log('[auth menu]');
        const { activeItem } = this.state
        const {auth} = this.props
        return (
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
                  <Menu.Item key={0}>Credits: {auth.credits}</Menu.Item>
                  <Menu.Item key={1}><Payment /></Menu.Item>
                  <Menu.Item key={2}
                    name='logout'
                    href='/api/logout'
                  />
              </Menu.Menu>
            </Menu>
        );
    }
}

class NonAuthMenu  extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        console.log('[non auth ]');
        const { activeItem } = this.state
        return (
            <Menu secondary inverted>
              <Menu.Item name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                as={Link} to='/'
              />
              <Menu.Menu position='right'>
                  <Menu.Item
                    name='login'
                    href='/auth/google'
                  />
              </Menu.Menu>
            </Menu>
        );
    }

}
