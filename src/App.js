import './App.css';
import Row from "./Components/Row/Row";
import request from "./Common/request";

function App() {

    return <div className={"app"}>
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

export default App;
