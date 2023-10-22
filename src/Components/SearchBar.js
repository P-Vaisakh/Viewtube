import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const navigate=useNavigate();
  const [searchInput, setSearchInput]=useState()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(searchInput){
      navigate(`/search/${searchInput}`)
      setSearchInput("")
    }
  }
  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        background: "#1f1d1d",
        borderRadius: "20px",
        border: "1px solid #5c5a5a",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        style={{ background: "#1f1d1d", color:"white", fontSize:"16px" }}
        placeholder="search..."
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ color: "red", p: "10px", borderLeft:"1px solid #5f5a5a", borderTopLeftRadius:"0px", borderBottomLeftRadius:"0px", paddingLeft:"20px"}}>
        <Search></Search>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
