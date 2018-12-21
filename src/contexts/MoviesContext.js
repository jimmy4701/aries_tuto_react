import React from 'react'

const MoviesContext = React.createContext(null)

export const withMovies = Component => props => (
    <MoviesContext.Consumer>
        {movies_context => <Component {...props} movies_context={movies_context} /> }
    </MoviesContext.Consumer>
)

export default MoviesContext