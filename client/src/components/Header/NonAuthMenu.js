import React, { Component } from 'react';

class NonAuthMenu extends Component {
  render() {
    console.log('[non auth ]');
    return (<nav className="user-nav">
      <div className="user-nav__icon-box">
        <a href='/auth/google' className="user-nav__user-name">login</a>
      </div>
    </nav>);
  }
}

export default NonAuthMenu
