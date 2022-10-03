import React from "react";
import "./HomeScreen.css";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import request from "../../Common/request";
export default function HomeScreen() {
    return <div className={"home-screen"}>
        <Navbar/>
        <Banner/>
        <Row title={"NETFLIX ORIGINALS"}
             fetchUrl={request.fetchNetflixOriginals}
             isLargeRow/>
        <Row title={"TRENDING NOW"}
             fetchUrl={request.fetchTrending}/>
        <Row title={"TOP RATED"}
             fetchUrl={request.fetchTopRated}/>
        <Row title={"ACTION MOVIES"}
             fetchUrl={request.fetchActionMovies}/>
        <Row title={"COMEDY MOVIES"}
             fetchUrl={request.fetchComedyMovies}/>
        <Row title={"HORROR MOVIES"}
             fetchUrl={request.fetchHorrorMovies}/>
        <Row title={"ROMANCE MOVIES"}
             fetchUrl={request.fetchRomanceMovies}/>
        <Row title={"DOCUMENTARIES"}
             fetchUrl={request.fetchDocumentaries}/>
    </div>
}