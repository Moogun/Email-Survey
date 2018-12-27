import React, { Component } from 'react';
import menu from '../../assets/img/menu.svg'

class NonAuthMenu extends Component {
  render() {
    console.log('[non auth ]');
    return (
      <>
        <div className="hamburger" onClick={() => this.props.toggleSideDrawer()}><img src={menu} alt="" /></div>
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <a href='/auth/google' className="user-nav__user-name">login</a>
          </div>
      </nav>
      </>
      );
  }
}

export default NonAuthMenu
