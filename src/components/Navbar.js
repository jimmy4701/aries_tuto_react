import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Modal, SigninForm } from '../components'

export default class Navbar extends Component {

    state = {

    }

    componentDidMount(){
        document.addEventListener('scroll', () => {
            this.setState({scroll: window.scrollY})
        })
    }

    toggleModal = () => this.setState({
        display_modal: !this.state.display_modal
    })

    render(){
        const {scroll, display_modal} = this.state

        return(
            <MainContainer scroll={scroll}>
                <LeftPart>
                    <CustomLink main to="/">
                        J.
                    </CustomLink>
                    <CustomLink to="/projects">
                        Projets
                    </CustomLink>
                    <CustomLink to="/apropos">
                        A propos
                    </CustomLink>
                    <CustomLink to="/contact">
                        Contact
                    </CustomLink>
                </LeftPart>
                <RightPart>
                    <NavbarItem onClick={this.toggleModal}>
                        Connexion
                    </NavbarItem>
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
    background-color: ${props => props.scroll ? "white" : ""};
    border-bottom: ${props => props.scroll ? "2px solid #dedede" : ""};

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
`

const NavbarItem = styled.div`
    cursor: pointer;
`