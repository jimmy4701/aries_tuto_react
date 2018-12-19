import React, {Component, createPortal} from 'react'
import Portal from './Portal'
import styled from 'styled-components'

export default class Modal extends Component {

    state = {

    }


    render(){
        return(
            <Portal>
                <MainContainer>
                    <Container>
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
    background-color: white;
    border-radius: 0.5em;
    height: 30em;
    width: 20em;
    display: flex;
    align-items: center;
    justify-content: center;
`