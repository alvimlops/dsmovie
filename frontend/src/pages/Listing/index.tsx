import MovieCard from "components/MovieCard";
import MovieStart from "components/MovieStart";
import Pagination from "components/Pagination";

function listem(){
    return(
        <>
        <Pagination/>

        <div className="container">
        <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard />
            </div>
        </div>
        </div>

        </>
        
    )
}

export default listem;