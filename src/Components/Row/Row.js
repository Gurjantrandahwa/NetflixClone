import React, {useEffect, useState} from "react";
import "./row.css";
import axios from "../../Common/axios";

const base_URL = "https://image.tmdb.org/t/p/original/";
export default function Row({title, fetchUrl,isLargeRow}) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.table(request.data.results);
            setMovies(request.data.results);
        }

        fetchData()
    }, [fetchUrl])
    return <div>
        <h2>{title}</h2>
        <div className={"row-posters"}>
            {movies.map((movie, index) => {
                return <div key={index}>
                    <img className={"row-posters-img"}
                         key={movie.id}
                         src={`${base_URL}${movie.poster_path}`}
                         alt={movie.name}/>
                </div>
            })}
        </div>
    </div>
}