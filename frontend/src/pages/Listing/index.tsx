
import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing(){
   
   
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const[pageNumber, setpageNumber ] = useState(0);

     const[Page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
     });

     useEffect(()  =>{

        axios.get(`${BASE_URL}/movie=${pageNumber}`)
        .then(response => {
            const data = response.data as MoviePage;
            setPage(data);
        
        });

     }, [pageNumber]);
     
    
   
     const handlePageChange = (newPageNumber : number ) =>{
         setpageNumber(newPageNumber)
     }

    return(
        <>
        
        <Pagination page={Page} onChange={handlePageChange}/>


        <div className="container">
        <div className="row">
            {Page.content.map(movie => (
                <div key={movie.id}  className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard movie={movie}/>
            </div>
            ) 
                )}

            
            
           
        </div>
        </div>
      

        </>
        
    )
}

export default Listing;