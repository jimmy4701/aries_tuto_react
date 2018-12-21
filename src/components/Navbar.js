import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Modal, SigninForm } from '../components'
import { withUser } from '../contexts'

class Navbar extends Component {

    state = {

    }

    componentWillReceiveProps(props){
        console.log('NAVBAR PROPS', props)
        this.setState({test: true})
    }

    componentDidReceiveProps(props){
        console.log('NAVBAR PROPS 2', props)
        this.setState({test: true})
    }


    componentDidMount(){
        document.addEventListener('scroll', () => {
            this.setState({scroll: window.scrollY})
        })
    }

    toggleModal = () => this.setState({
        display_modal: !this.state.display_modal
    })

    logout = async () => {
        const user = await this.props.userAuth.logout()
        this.setState({})
    }

    render(){
        const {scroll, display_modal} = this.state
        const {userAuth} = this.props

        return(
            <MainContainer scroll={scroll}>
                <LeftPart>
                    <CustomLink scroll={scroll}  main to="/">
                        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2000px-Netflix_2015_logo.svg.png"/>
                    </CustomLink>
                    <CustomLink scroll={scroll} to="/projects">
                        Projets
                    </CustomLink>
                    <CustomLink scroll={scroll} to="/apropos">
                        A propos
                    </CustomLink>
                    <CustomLink scroll={scroll} to="/contact">
                        Contact
                    </CustomLink>
                </LeftPart>
                <RightPart>
                    {userAuth.user.authenticated ?
                        <NavbarItem onClick={this.logout}>
                            Déconnexion
                        </NavbarItem>
                    :
                        <NavbarItem onClick={this.toggleModal}>
                            Connexion
                        </NavbarItem>
                    }
                    {display_modal && 
                        <Modal onClose={this.toggleModal}>
                            <SigninForm onFormSubmit={this.toggleModal}/>
                        </Modal>
                    }
                </RightPart>
            </MainContainer>
        )
    }
}

export default withUser(Navbar)



const MainContainer = styled.div`
    z-index: 1000;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1.5em;
    background-color: ${props => props.scroll ? "black" : ""};

`
const LeftPart = styled.div`
    flex-grow: 1;
`
    
const RightPart = styled.div`
    flex-grow: 1;
    text-align: right;
    padding-right: 2em;
`
const CustomLink = styled(Link)`
    margin: 0 1em;
    font-weight: ${props => props.main ? "900" : ""};
    font-size: ${props => props.main ? "1.2em" : ""};
    color: white;
`

const NavbarItem = styled.div`
    cursor: pointer;
    color: white;
`

const Logo = styled.img`
    max-height: 100%;
`