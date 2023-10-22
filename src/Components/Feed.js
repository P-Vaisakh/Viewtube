import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {SideBar, Videos} from "./";
import { fetchFromApi } from "../utils/fetchfromApi";


const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState("New")

  const [videos, setVideos]= useState([])

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then(data=>{setVideos(data.items)})
  },[selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}></SideBar>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ marginTop: 1.5, color: "#fff" }}
        >
          Copyright 2023
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          flex: 2,
          overflowY: "auto",
          height: "90vh",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"} mb={2} color={"white"}>
          {selectedCategory} <span style={{ color: "white", marginLeft: "2px" }}>Videos</span>
        </Typography>
        <Videos videos={videos}></Videos>
      </Box>
    </Stack>
  );
};

export default Feed;
