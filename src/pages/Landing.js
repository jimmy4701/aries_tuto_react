import React, { Component, Fragment } from 'react'
import { Splitter, MovieHeader } from '../components'
import { movies, categories } from '../database'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
                <MovieHeader movie={movie}/>
                {
                    categories.map(category => {
                        const filtered_movies = movies.filter(m => m.category_id == category.id)
                        return(
                            <div>
                                <h1>{category.name}</h1>
                                {filtered_movies.map(m => {
                                    return (
                                        <Link to={"/movie/" + m.id}>
                                            <VideoPartial></VideoPartial>
                                        </Link>
                                    )
                                })}
                            </div>
                        )
                        
                    })
                }             
            </Fragment>
        )
    }
}

const VideoPartial = styled.div`
    background-image: url('https://2.bp.blogspot.com/-mCe2ITqsRGg/WuAgV1RXhjI/AAAAAAAApvw/avw7E14EHRgplDVpfJPaOOi14-tWX1qcgCLcBGAs/s1600/youtube-logo-1.jpg');
    background-position: center;
    background-size: cover;
    height: 7em;
    width: 14em;
    display: inline-block;
    margin: 0.5em;
    cursor: pointer;
`