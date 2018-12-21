import React, { Component, Fragment } from 'react'
import { Splitter } from '../components'
import { movies } from '../database/movies'
import styled from 'styled-components'

export default class Landing extends Component {

    state = {
        movies: []
    }


    async componentDidMount(){
        // let response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b92715922f04621de38d69cf55169453');
        // let data = await response.json();
        // console.log('movies', data)

        // // Préparation movies
        // const movies = data.results.map((movie, index) => {
        //     if(index % 2 == 0){
        //         return {
        //             imageLeft: "http://image.tmdb.org/t/p/original/" + movie.poster_path,
        //             rightContent: movie.title,
        //             leftDetails: movie.release_date
        //         }
        //     }else{
        //         return {
        //             imageRight: "http://image.tmdb.org/t/p/original/" + movie.poster_path,
        //             leftContent: movie.title,
        //             rightDetails: movie.release_date
        //         }
        //     }
        // })
        // this.setState({movies})
    }



    render(){
        const movie = movies.find(o => o.highlight == true)
        return(
            <Fragment>
                <Header>
                    <TitleContainer>
                        <SubTitle>UN FILM <strong>NETFLIX</strong></SubTitle>
                        <Title>{movie.title}</Title>
                    </TitleContainer>
                    <MainFrame onload="this.width=screen.width;this.height=screen.height;" src={movie.embed + "?autoplay=1"} frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></MainFrame>
                </Header>
                
            </Fragment>
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