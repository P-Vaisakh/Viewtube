import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
    
      sx={{
        width: { md: "300px",sm:"350px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "none",
        background:"#0f0f0f"
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{borderRadius:"10px", background:"#0f0f0f"}}>
        <CardMedia
          alt={snippet?.title}
          image={snippet?.thumbnails?.high?.url}
          sx={{ width: {xs:"100%",sm:"358px", md:"320px"}, height: "180px", borderRadius:"10px",}}
        />
      </Link>
      <CardContent sx={{ background: "#0f0f0f", height: "84px", pb:"16px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={"bold"} color={"#fff"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight={"bold"} color={"gray"} display={"flex"} alignItems={"center"} marginTop={"5px"}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{ fontSize: "16px", color: "gray", ml: "6px"}}
            ></CheckCircle>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
