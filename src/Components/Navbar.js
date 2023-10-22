import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        background: "rgb(17,17,17)",
        background:
          "linear-gradient(0deg, rgba(15,15,15,1) 10%, rgba(0,0,0,1) 98%)",
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        zIndex: 999,
      }}
    >
      <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar></SearchBar>
    </Stack>
  );
};

export default Navbar;
