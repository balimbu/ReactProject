import { useParams } from "react-router";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = ( {houses} ) => {

    // get county from location bar
    // useParams to get the county 
    // then need to filter the houses based on county
    let {county} = useParams(); // now i got the county
    // if the elem.county is the same as the county i got from the params, return that county
    let filteredHouses = houses.filter( (elem)=> elem.county === county )    
    console.log(filteredHouses);

    return (  
        <div>
           
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        filteredHouses.map((elem) => {
                          return <SearchResultsRow house={elem}/>
                        })
                        }                        
                       
                    </tbody>
                </table>
            </div>
           


        </div>

     );
}
 
export default SearchResults;