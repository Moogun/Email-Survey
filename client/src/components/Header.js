import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.svg'
import Payment from './Payment'

class Header extends Component {

  renderContent(activeItem, handleItemClick) {
    switch (this.props.auth) {
      case null:
          return <div></div>
      case false :
          return <NonAuthMenu />
      default :
          return <AuthMenu auth={this.props.auth}/>
    }
  }
  render() {
    console.log(this.props);
    return (
        <header className="header">
          <img
            src={logo}
            alt="Email Survey" className="logo"/>
            {this.renderContent()}
        </header>
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
          <nav className="user-nav">
            <div className="user-nav__icon-box">
              Credits: {auth.credits}
            </div>
            <div className="user-nav__icon-box">
              <Payment />
            </div>
            <div className="user-nav__user">
              <a href='/api/logout' className="user-nav__user-name">logout</a>
            </div>
          </nav>
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
          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <a href='/api/login' className="user-nav__user-name">login</a>
            </div>
          </nav>
        );
    }
}
