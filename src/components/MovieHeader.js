import React, {Component} from 'react'
import styled from 'styled-components'

export default class MovieHeader extends Component {

    render(){
        const {movie} = this.props
        return(
            <Header>
                <TitleContainer>
                    <SubTitle>UN FILM <strong>NETFLIX</strong></SubTitle>
                    <Title>{movie.title}</Title>
                </TitleContainer>
                <MainFrame onload="this.width=screen.width;this.height=screen.height;" src={movie.embed + "?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0"} autohide="1" showinfo="0" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></MainFrame>
            </Header>
        )
    }
}

const Header = styled.div`
    height: 100vh;
    position: relative;
`

const MainFrame = styled.iframe`
    width: 100%;
    height: 100%;
`

const TitleContainer = styled.div`
    position: absolute;
    top: 21em;
    left: 5em;
`

const SubTitle = styled.h1`
    color: white;
    font-size: 3em;
`

const Title = styled.h1`
    color: white;
    font-size: 6em;
    max-width: 50%;
`