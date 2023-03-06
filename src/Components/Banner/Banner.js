import React, {useEffect, useState} from "react";
import "./Banner.css";
import axios from "../../Common/axios";
import requests from "../../Common/request";

export default function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)
                ]);
            return request;
        }

        fetchData();
    }, []);

    function lengthOfDes(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return <header
        className={"banner"}
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center"
        }}>
        <div className={"banner-contents"}>
            <h1 className={"banner-title"}>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className={"banner-buttons"}>
                <button className={"banner-button"}>Play</button>
                <button className={"banner-button"}>My List</button>
                <h1 className={"banner-description"}>
                    {lengthOfDes(movie?.overview, 180)}
                </h1>
            </div>
        </div>
        <div className={"banner-fadeBottom"}/>
    </header>
}