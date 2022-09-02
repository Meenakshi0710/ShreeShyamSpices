import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MetaData from './Metadata';

const Search = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("")

   
    const searchSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(keyword.trim());
        if(keyword.trim()){
            navigate(`/products/${keyword}`)
        }else{
          console.log("I am here");
            navigate("/products")
        }
    }
  return (
    <>
        <MetaData title="Search a Product -- Shree Shyam Spices" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </>
  )
}

export default Search