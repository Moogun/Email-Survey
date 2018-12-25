import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import logo from '../../assets/img/logo.svg'

import AuthMenu from './AuthMenu'
import NonAuthMenu from './NonAuthMenu'
import SideDrawer from './SideDrawer'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawer: false
    };
  }

  togglesideDrawer = () => {
    // this.setState({sideDrawer: !this.state.sideDrawer}) // bad
    this.setState((prevState) => {
      return { sideDrawer: !prevState.sideDrawer}
    })
    console.log(this.state.sideDrawer);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return <div></div>
      case false:
        return <NonAuthMenu />
      default:
        return <AuthMenu auth={this.props.auth} toggleSideDrawer={this.togglesideDrawer}/>
    }
  }

  render() {
    let backdrop;
    if (this.state.sideDrawer) {
      backdrop = <Backdrop />
    }
    return (<header className="header">
      <Link to={this.props.auth
          ? "/surveys"
          : "/"} className="logo_box">
        <img src={logo} alt="Email Survey" className="logo"/>
        <span>Email Marketing</span>
      </Link>
      <SideDrawer sideDrawer={this.state.sideDrawer}/>
      {backdrop}

      {this.renderContent()}
    </header>)
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
}
export default connect(mapStateToProps)(Header)


const Backdrop = props => {
  return <div className="backdrop"></div>
}
