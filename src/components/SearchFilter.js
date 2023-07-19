import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

const SearchFilter = ( {houses}) => {
    // iterate through the county values in houses
    // return all county
    // store them in a set, to remove duplicates
    // create an array out of it
    // use that in the select filed to display options
    let myhouses = houses;
    let counties = Array.from(new Set(myhouses.map( (elem)=> elem.county)));
    console.log(counties);

    let navigate = useNavigate(); // navigate hook to navigate between different different

    let changeHandler = (e) => {
        console.log("change handler" + e.target.value);
        let county = e.target.value;
        navigate(`searchresults/${county}`);


    }


    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    Search By County
                    <select onChange={changeHandler} >                        
                        {
                            counties.map((elem)=> <option key={elem} value={elem}> {elem} </option>)
                        }
                    </select>
                </div>
            </div>
        </div>

     );
}

export default SearchFilter;