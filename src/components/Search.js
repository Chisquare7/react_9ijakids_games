import React, { useState } from 'react'
import Scroll from './Scroll'
import SearchList from './SearchList'


export default function Search({ details }) {

    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);

    const filteredGames = details.filter(
        games => {
            return (
                games.Group.toLowerCase().includes(searchField.toLowerCase()) ||
                games.Level.toLowerCase().includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = event => {
        setSearchField(event.target.value);
        if(event.target.value===""){
            setSearchShow(false);
        }
        else {
            setSearchShow(true);
        }
    };


    function searchList() {
        if (searchShow) {
            return (
                <Scroll>
                    <SearchList filteredGames={filteredGames} />
                </Scroll>
            );
        
        }
    }

  return (
    <div className='search_content'>
        <div>
            <input
            className="search_field"
            type = "search" 
            placeholder = "Search Games" 
            onChange = {handleChange}
            />
        </div>
        <div className='search_container'>
          {searchList()}
        </div>  
    </div>
  );
}
