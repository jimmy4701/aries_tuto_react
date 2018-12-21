import React, {Component} from 'react'
import styled from 'styled-components'
import { movies } from '../database/movies'

export default class Movie extends Component {
    state = {
        
    }

    render(){
        const {movie_id} = this.props.match.params
        console.log('MOVIE', movie_id)
        const movie = movies.find(o => o.id == movie_id)
        return(
            <MainContainer>
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <iframe width="560" height="315" src={movie.embed} frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
            </MainContainer>
        )
    }
}

const MainContainer = styled.div`
    
`