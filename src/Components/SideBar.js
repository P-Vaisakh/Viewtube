import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({selectedCategory, setselectedCategory}) => {

  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" } }}
    >
      {categories.map((category) => (
        <button
        onClick={()=>{setselectedCategory(category.name)}}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#fc1503",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? "1" : ".8" }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
