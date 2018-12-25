import React from 'react';
import newsurvey from '../../assets/img/newsurvey.svg'
import Payment from '../Payment'

const SideDrawer  = ({sideDrawer, auth}) => {
  console.log('[sideDrawer]', auth);
  return (<div className={sideDrawer ? "sideDrawer open" : "sideDrawer" }>
      <div className="sideDrawer_nav">
        <div className="sideDrawer_title">
          <p className="sideDrawer_title-main">user@gmail.com </p>
          <p className="sideDrawer_title-sub">credits : 10</p>
        </div>
        <div className="sideDrawer_item">
          <img src={newsurvey} alt="" className="sideDrawer_item-icon"/>
          <Payment />
        </div>
        <div className="sideDrawer_item">
          <img src={newsurvey} alt="" className="sideDrawer_item-icon"/>
          <a href='/api/logout' className="">Logout</a>
        </div>
      </div>
    </div>)
}

export default SideDrawer
