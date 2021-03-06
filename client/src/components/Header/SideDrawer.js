import React from 'react';
import logout from '../../assets/img/logout.svg'
import add from '../../assets/img/add.svg'
import Payment from '../Payment'

const SideDrawer  = ({sideDrawer, auth}) => {
  return (<div className={sideDrawer ? "sideDrawer open" : "sideDrawer" }>

      {auth
        ? <div className="sideDrawer_nav">
          <div className="sideDrawer_title">
            <p className="sideDrawer_title-main">dummy@gmail.com </p>
            <p className="sideDrawer_title-sub">credits : {auth.credits}</p>
          </div>
          <div className="sideDrawer_item">
            <img src={add} alt="" className="sideDrawer_item-icon"/>
            <Payment />
          </div>
          <div className="sideDrawer_item">
            <img src={logout} alt="" className="sideDrawer_item-icon"/>
            <a href='/api/logout' className="">Logout</a>
          </div>
        </div>
      : <div className="sideDrawer_item">
        <img src={logout} alt="" className="sideDrawer_item-icon"/>
        <a href='/auth/google' className="">Login</a>
      </div>}
    </div>)
}

export default SideDrawer
