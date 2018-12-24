import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.svg'
import menu from '../assets/img/menu.svg'
import Payment from './Payment'

class Header extends Component {

  renderContent(activeItem, handleItemClick) {
    switch (this.props.auth) {
      case null:
        return <div></div>
      case false:
        return <NonAuthMenu/>
      default:
        return <AuthMenu auth={this.props.auth}/>
    }
  }
  render() {
    return (<header className="header">
      <Link to={this.props.auth
          ? "/surveys"
          : "/"} className="logo_box">
        <img src={logo} alt="Email Survey" className="logo"/>
        <span>Email Marketing</span>
      </Link>
      {this.renderContent()}
    </header>)
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
}
export default connect(mapStateToProps)(Header)

class AuthMenu extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'home',
      height: window.innerHeight,
      width: window.innerWidth,
      isMobile: null,
      mobileMenu: false
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.setState({isMobile: this.state.width < 500 ? true : false})
  }
  updateDimensions() {
    this.setState({height: window.innerHeight, width: window.innerWidth, isMobile: this.state.width < 500 ? true : false});
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  handleMenuClick = () => {
    this.setState({mobileMenu: !this.state.mobileMenu})
    console.log(this.state.mobileMenu);
  }

  render() {
    console.log('[auth menu]', this.state.width, this.state.isMobile);
    const {activeItem} = this.state
    const {auth} = this.props

    return (
      <>
        {this.state.isMobile
          ? <div onClick={this.handleMenuClick}><img src={menu} alt="" className="hamburger"/></div>
          :
          (<nav className="user-nav">
            <div className="user-nav__icon-box">
              Credits: {auth.credits}
            </div>
            <div className="user-nav__icon-box">
              <Payment/>
            </div>
            <div className="user-nav__user">
              <a href='/api/logout' className="user-nav__user-name">Logout</a>
            </div>
          </nav>)
        }
      </>
    );
  }
}

class NonAuthMenu extends Component {
  state = {
    activeItem: 'home'
  }
  handleItemClick = (e, {name}) => this.setState({activeItem: name})
  render() {
    console.log('[non auth ]');
    const {activeItem} = this.state
    return (<nav className="user-nav">
      <div className="user-nav__icon-box">
        <a href='/auth/google' className="user-nav__user-name">login</a>
      </div>
    </nav>);
  }
}
