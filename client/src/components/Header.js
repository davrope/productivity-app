import React from 'react';
import {connect} from 'react-redux';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa'

// Import libraries to make it responsive:

import styled from 'styled-components'



class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {

      isOpen: false
    }
  }
  

  toggle = ()=>{
    this.setState({isOpen:!this.state.isOpen})
    
  }



    renderContent(){
      

        switch(this.props.auth){
            case false:
                    return (
                      <NavLinkS className = "google log in" href = "/auth/google" key = "googlelogin"> 
                      {/* //<a  style={{alignItems:'center'}} href = "/auth/google" key = "googlelogin">  */}
                        <i className = "google icon"></i>
                        Login with Google
                      </NavLinkS>
                      );
            default:
                return[
                    <NavLinkS className = "sign-out" href = "/api/logout" key = "signout"> <i className = "sign-out icon"></i>
                      <p style={{paddingTop:'6px'}}>Logout</p>
                    </NavLinkS>
                ];
        }
    }


    render(){
      return(
        <div>

        <SidebarContainer isOpen = {this.state.isOpen} onClick={this.toggle}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink className = "item" href= {this.props.auth ? '/projects' : '/'} key = "projects button">
                        Projects
                    </SidebarLink>
                    <SidebarLink className = "item" href = {this.props.auth ? '/projects/new' : '/' }  key = "new project">
                        New Project
                    </SidebarLink>
                    <NavLinkS className='item' href= {this.props.auth ? '/api/logout': '/auth/google'}  key= "auth">
                      {this.props.auth ? <SidebarLink>Logout</SidebarLink> : <SidebarLink>Login with Google</SidebarLink>}
                    </NavLinkS>
                </SidebarMenu>

                <Icon onClick={this.toggle} className="icon-container">
                    <CloseIcon/>
                </Icon>
            </SidebarWrapper>
        </SidebarContainer>
    















          
          <Nav>
            <NavbarContainer>
              <NavLogo href = "/" key = "home button">
                <i className='home icon'></i>
              </NavLogo>

              <MobileIcon onClick={this.toggle}>
              <FaBars/>
              </MobileIcon>

              <NavMenu>
                <NavItem>
                  <NavLinkS className = "item" href= {this.props.auth ? '/projects' : '/'} key = "projects button">
                    <i className = "archive icon"/>
                    <p style={{paddingTop:'6px'}}>Projects</p>
                  </NavLinkS>
                </NavItem>

                <NavItem>
                  <NavLinkS className = "item" href = {this.props.auth ? '/projects/new' : '/' }  key = "new project">
                      <i className = "add icon"></i>
                      <p style={{paddingTop:'6px'}}>New Project</p>
                    </NavLinkS>
                </NavItem>


                <NavItem style={{alignItems:'bottom'}}>
                  <div style={{height:'100%'}}>
                    {this.renderContent()}
                  </div>
                </NavItem>
              </NavMenu>



            </NavbarContainer>
          </Nav>
        </div>
      )
    }
}

// Styled components:

const Nav = styled.nav`
    box-sizing: border-box;
    width: 100%;
    padding: 1em;
    margin-bottom: 0em;
    

    background-color: #000;
    height: 80px;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items:center;
    /* align-items: baseline; */
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 1;
    

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`

const NavbarContainer = styled.nav`
    display:flex;
    justify-content: space-between;
    height:80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

const NavLogo = styled.a`
    color: #0fd27a;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left:24px;
    font-weight: bold;
    text-decoration: none;  
`

const  MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display:block;
        position: flex;
        margin-top: 1em;
        top: 0;
        right: 0;
        align-items: center;
        transform: translate (-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #f7f7f2;
        
        
        /* background-color: green; */
    }
`
const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

const NavItem = styled.li`
    height: 80px;

`

// const NavButton = styled.button`
//     /* display: flex;
//     align-items: center;
//     justify-content: center;

//     @media screen and (max-width: 768px){
//         display: none;

//     } */

//     /* color: #f7f7f2; */
//     background-color: #000;
//     border-color: #000;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     width: 100%;
//     height: 100%;
//     cursor: pointer;
//     outline: none;
    

//     &.active{
//         border-bottom: 3px solid #00A3A3;
//     }

// `



const NavLinkS = styled.a`
    color: #f7f7f2;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #00A3A3;
    }
`



// ***************************************************
// ABOVE THIS THE STYLES ARE FOR MobileIcon
// *****************************************************

// const SidebarContainer = styled.aside`
//     position: fixed;
//     z-index:999;
//     width: 100%;
//     height: 100%;
//     background: #0d0d0d;
//     display: grid;
//     align-items: center;
//     top: 0;
//     left: 0;
//     transition: 0.3s ease-in-out;


// `
const CloseIcon = styled(FaTimes)`
    color: #fff;
    text-align:center;
    display: block;
    width: 100%;
`

const Icon = styled.div`
    /* position: absolute; */
    top: 1.2 rem;
    right: 1.5 rem;
    background: transparent;
    font-size: 2rem;
    cursor:pointer;
    outline: none;

`

const SidebarWrapper = styled.div`
    color: #fff;
    text-align:center;

`



const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding-left:0;

    @media screen and (max-width: 480px){
        
        grid-template-rows: repeate(6, 60px);
        
    }
`


const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style-type: none;
    padding:0;
    margin:0;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        color:#27d594;
        transition: 0.2s ease-in-out;
    }

`

function mapStateToProps({ auth }) {
    return { auth };
  }


const SidebarContainer = styled.aside`
    position: fixed;
    z-index:999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen ? '100%': '0')} ;
    top:${({isOpen})=>(isOpen ? '0%': '-100%')} ;

`


export default connect(mapStateToProps)(Header);