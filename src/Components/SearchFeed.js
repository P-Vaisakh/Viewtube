import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchfromApi";
import { useParams } from "react-router-dom";


const Feed = () => {

  const [videos, setVideos] = useState([]);

  const{searchTerm}=useParams()

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
      <Box
        p={2}
        sx={{
          flex: 2,
          overflowY: "auto",
          height: "90vh",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"} mb={2} color={"white"}>
          Search results for {searchTerm}{" "}
          <span style={{ color: "white", marginLeft: "2px" }}></span>
        </Typography>
        <Videos videos={videos}></Videos>
      </Box>
  );
};

export default Feed;
