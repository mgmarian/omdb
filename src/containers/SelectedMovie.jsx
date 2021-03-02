import React, {useState, useEffect} from 'react'
import axios from "axios";
import Movie from "../components/Movie"

const apiKey = '9bcd5f8d7a9165bb7f785ab7e82a5143'

const SelectedMovie = ({movieId}) => {
    
    const [movie, setMovie ] = useState({})
    
    useEffect(()=> {
        axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-EN`)
        .then((res) => res.data)
        .then(film => setMovie(film))
    }, [movieId]);

    return (
        <div>
            <Movie movie={movie} />
        </div>
    )
}

export default SelectedMovie;