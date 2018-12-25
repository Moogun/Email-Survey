import React from 'react';

const SideDrawer  = ({sideDrawer}) => {
  console.log('[sideDrawer]', sideDrawer);
  return (<div className={sideDrawer ? "sideDrawer open" : "sideDrawer" }>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>)
}


export default SideDrawer ;
