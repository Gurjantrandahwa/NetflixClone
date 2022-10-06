import React, {useEffect, useState} from "react";
import "./row.css";
import axios from "../../Common/axios";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_URL = "https://image.tmdb.org/t/p/original/";
export default function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
        }

        fetchData()
    }, [fetchUrl]);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                }).catch(error => console.log(error))
        }
    }
    return <div className={"row"}>
        <h2>{title}</h2>
        <div className={"row-posters"}>
            {movies.map((movie, index) => {
                return <div key={index}>
                    <img onClick={() => {
                        handleClick(movie)
                    }}
                         className={`row-posters-img ${isLargeRow && "row-posters-img-large"}`}
                         key={movie.id}
                         src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path
                         }`}
                         alt={movie.name}/>
                </div>
            })}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
}