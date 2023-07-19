import { useNavigate } from "react-router";

const SearchResultsRow = ( {house} ) => {

    let navigate = useNavigate();

    let onClickHandler = ()=>{
        navigate(`/searchedhouse/${house._id}`);
    }
    console.log(house)
    return ( 
        <tr onClick={onClickHandler}>
            <td> {house.address}</td>
            <td> $ {house.price}</td>
            {/* <td> <img src = "images/7.jpg" alt ={house._id} key = {house._id}/> </td> */}
        </tr>
     );
}
 
export default SearchResultsRow;