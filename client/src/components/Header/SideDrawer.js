import React from 'react';
import newsurvey from '../../assets/img/newsurvey.svg'

const SideDrawer  = ({sideDrawer}) => {
  // console.log('[sideDrawer]', sideDrawer);
  return (<div className={sideDrawer ? "sideDrawer open" : "sideDrawer" }>
      <div className="sideDrawer_nav">
        <div className="sideDrawer_title">
          <p className="sideDrawer_title-main">user@gmail.com </p>
          <p className="sideDrawer_title-sub">credits : 10</p>
        </div>
        <div className="sideDrawer_item">
          <img src={newsurvey} alt="" className="sideDrawer_item-icon"/>
          Account
        </div>
        <div className="sideDrawer_item">
          <img src={newsurvey} alt="" className="sideDrawer_item-icon"/>
          Credits
        </div>
        <div className="sideDrawer_item">
          <img src={newsurvey} alt="" className="sideDrawer_item-icon"/>
          Add credits
        </div>
        <div className="sideDrawer_item">
          <img src={newsurvey} alt="" className="sideDrawer_item-icon"/>
          Etc
        </div>
      </div>
    </div>)
}


export default SideDrawer ;
