import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { imageUrl, API_KEY } from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'



function RowPost(props) {

    const [movies, setMovies] = useState([])
    const [Urlid, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err => {
            alert('network Err')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };


    const handelMovie = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            console.log(response.data);

             if (response.data.results.lenhth!==0) {
                setUrlId(response.data.results[0])
             }
             else{
                console.log("trailer not available");
             }
           
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>
                    <img onClick={() => handelMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />

                       
                )}


            </div>
          {  Urlid && <Youtube opts={opts} videoId={Urlid.key} />}

        </div>
    )
}

export default RowPost