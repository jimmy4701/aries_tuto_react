import React, {Component, createPortal} from 'react'
import Portal from './Portal'
import styled from 'styled-components'

export default class Modal extends Component {

    state = {

    }

    closeModal = () => {
        if(this.props.onClose){
            this.props.onClose()
        }
    }

    render(){
        const {onClose} = this.props
        return(
            <Portal>
                <MainContainer>
                    <Container className="animated fadeInUp">
                        {onClose && <CloseIcon src="https://image.flaticon.com/icons/svg/148/148766.svg" onClick={this.closeModal}/>}
                        {this.props.children}
                    </Container>
                </MainContainer>
            </Portal>
        )
    }
}

const MainContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    position: relative;
    background-color: white;
    border-radius: 0.5em;
    height: 30em;
    width: 20em;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CloseIcon = styled.img`
    position: absolute;
    top: -1em;
    right: -1em;
    height: 50px;
    width: 50px;
    cursor: pointer;
`