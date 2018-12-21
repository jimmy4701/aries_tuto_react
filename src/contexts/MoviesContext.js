import React from 'react'

const MoviesContext = React.createContext(null)

export const withMovies = Component => props => (
    <MoviesContext.Consumer>
        {movies => <Component {...props} movies={movies} /> }
    </MoviesContext.Consumer>
)

export default MoviesContext