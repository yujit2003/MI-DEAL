import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";
import {Navigate, useNavigate} from "react-router-dom"

const Search = ({  }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    // prevent reloading of page
    e.preventDefault();
    console.log(keyword)
    if (keyword.trim()) {
      // in version 6 we use navigate method rather than UseHistory
      navigate(`/products/${keyword}`, { replace: true });
    } else {
      navigate('/products', {replace: true})
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
