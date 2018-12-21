// Movie handler
import { movies } from './database'

export class UserAuth {
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



export class MoviesHandler {
    constructor(){
        this.movies = movies
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


}