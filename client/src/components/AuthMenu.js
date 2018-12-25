import React, {Component} from 'react'
import menu from '../assets/img/menu.svg'
import Payment from './Payment'

class AuthMenu extends Component {

  render() {
    const {auth} = this.props
    // console.log('[auth menu]', isMobile);
    return (
      <>
        <div className="hamburger" onClick={() => this.props.toggleSideDrawer()}><img src={menu} alt="" /></div>
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            Credits: {auth.credits}
          </div>
          <div className="user-nav__icon-box">
            <Payment/>
          </div>
          <div className="user-nav__user">
            <a href='/api/logout' className="user-nav__user-name">Logout</a>
          </div>
        </nav>
      </>
    );
  }
}

export default AuthMenu
