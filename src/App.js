//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import Header from '../components/Header';
import { useState, useEffect } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import { Route, Routes } from 'react-router';
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';

function App() {
  
      let[allHouses, setAllHouses] = useState([]);

      useEffect( ()=> {
        async function getHousesInfo(){
          let resp = await fetch('houses.json')
          let data = await resp.json();
          console.log(data);
          setAllHouses(data);
        }
        getHousesInfo() // function call
      }, []);
      
      return (
        <div className="App">
        {/* <h1> Hello world! </h1> */}
        <Header/>
        <SearchFilter houses = {allHouses}/>
        {/* <House houses = {allHouses}/> */}

        Routing
        <Routes>
          <Route path ='/' element ={<House houses = {allHouses} />} /> 
          <Route path ='searchresults/:county' element ={<SearchResults houses ={allHouses}/>} />
          <Route path ='searchedhouse/:id' element = {<SearchedHouse houses ={allHouses}/>} /> 
        </Routes>
    </div>
  );
}

export default App;
