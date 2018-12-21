// Movie handler
import React from 'react'
import { movies, categories } from './database'
import { UserContext, MoviesContext } from './contexts'
import App from './App'
import CategoriesContext from './contexts/CategoriesContext';

class UserAuth {
    constructor(){
        this.user = {
            authenticated: false,
            username: null
        }
    }

    signIn = (user) => {
        this.user = {
            username: user.username,
            authenticated: true
        }
        return this.user
    }

    logout = () => {
        this.user = {
            username: null,
            authenticated: false
        }
        console.log('userContext', this.user)
        return this.user
    }
}



class MoviesHandler {
    constructor(){
        this.movies = movies // Initialisation Firebase simulée
        this.favorites = []
    }

    toggleFavorite = (movie_id) => {
        const index = this.movies.indexOf(movie_id)
        if(index > -1){
            this.movies.splice(index, 1)
        }else{
            this.movies.push(movie_id)
        }
    }

    isFavorite = (movie_id) => {
        return this.movies.indexOf(movie_id) > -1
    }


    addMovie = (movie) => this.movies.push(movie)

}

class CategoriesHandler {
    constructor(){
        this.categories = categories
    }

    addCategory = (category) => this.categories.push(category)
}




export const WithUserApp = (props) => (
    <UserContext.Provider value={new UserAuth()}>
        {props.children}
    </UserContext.Provider>
)

export const WithMoviesApp = (props) => (
    <MoviesContext.Provider value={new MoviesHandler()}>
        {props.children}
    </MoviesContext.Provider>
)

export const WithCategoriesApp = (props) => (
    <CategoriesContext.Provider value={new CategoriesHandler()}>
        {props.children}
    </CategoriesContext.Provider>
)

export const DefaultContextApp = () => (
    <WithUserApp>
        <WithCategoriesApp>
            <WithMoviesApp>
                <App />
            </WithMoviesApp>
        </WithCategoriesApp>
    </WithUserApp>
)