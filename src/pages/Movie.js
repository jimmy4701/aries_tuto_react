import React, {Component} from 'react'
import styled from 'styled-components'
import { withMovies } from '../contexts'

class Movie extends Component {
    state = {
        
    }

    toggleFavorite = () => {
        this.props.movies_context.toggleFavorite(this.props.match.params.movie_id)
        this.setState({})
    }

    render(){
        const {movies_context, movies_context: {movies}} = this.props
        const {movie_id} = this.props.match.params
        const movie = movies.find(o => o.id == movie_id)

        const is_favorite = movies_context.isFavorite(movie_id)

        return(
            <MainContainer>
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <iframe width="560" height="315" src={movie.embed} frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
                <button onClick={this.toggleFavorite}>{is_favorite ? "Retirer des favoris" : "Ajouter aux favoris"}</button>
            </MainContainer>
        )
    }
}

const MainContainer = styled.div`
    
`

export default withMovies(Movie)