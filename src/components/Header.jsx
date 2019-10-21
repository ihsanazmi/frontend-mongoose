import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../actions/index'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavLink,
    NavItem, Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem  } from 'reactstrap';

class Header extends Component {

    state = {
        isOpen : false
    }

    toogle = ()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    renderNavigation = ()=>{
        if(!this.props._email){
            return (
                <Nav className="ml-auto">
                    <NavItem>
                        <NavLink tag = {Link} className="nav-link" to ="/login">
                            <button className="btn btn-outline-success">Register</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag = {Link} className="nav-link" to ="/register">
                            <button className="btn btn-outline-info">Login</button>
                        </NavLink>
                    </NavItem>

                </Nav>
            )
        }else{
            return (
                <Nav className="ml-auto">
                    <NavItem>
                        <NavLink tag = {Link} className="nav-link" to ="/">Task</NavLink>
                    </NavItem>

                    <UncontrolledDropdown>
                        <DropdownToggle nav inNavbar>
                            Hello, {this.props._username}
                        </DropdownToggle>

                        <DropdownMenu>
                            <DropdownItem>
                                <Button className="dropdown-item" onClick={this.props.logOut}>Logout</Button>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            )
        }
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Link className="navbar-brand" to ="/">Mongoose db</Link>
                    <NavbarToggler onClick={this.toogle}/>
                    <Collapse isOpen = {this.state.isOpen}/>

                        {this.renderNavigation()}

                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        _email: state.auth.email,
        _id: state.auth.id,
        _username: state.auth.username
    }
}

export default connect(mapStateToProps,{logOut})(Header)
