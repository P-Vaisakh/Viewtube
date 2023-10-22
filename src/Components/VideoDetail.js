import { CheckCircle } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchfromApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);
  if (!videoDetail?.snippet) return "loading";
  const {
    snippet: { title, channelId, channelTitle, publishedAt, description },
    statistics: { likeCount, viewCount },
  } = videoDetail;
  console.log(videoDetail);
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} pt={0} sx={{paddingLeft:{xs:0, md:"80px"}}}>
          <Box sx={{ width: "100%",position:"sticky", top:"-100px"}} >
            <ReactPlayer 
              className="react-player"
              controls
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <Typography variant="h5" color={"#fff"} fontWeight={"bold"} pt={2} px={2}>
              {title}
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"start"}
              sx={{ color: "#fff" }}
              gap={"50px"}
              mt={"8px"}
              ml={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={"h6"} color={"white"}>
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "16px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                <Stack
                  direction={"row"}
                  border={"2px solid white"}
                  borderRadius={"30px"}
                >
                  <Button
                    sx={{
                      background: "#0f0f0f",
                      color: "#fff",
                      borderRadius: "30px",
                      px: "15px",
                    }}
                  >
                    <ThumbUpAltIcon sx={{ marginRight: "5px" }} />
                    {parseInt(likeCount).toLocaleString()}
                  </Button>
                  <Button
                    sx={{
                      borderLeft: "1px solid white",
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      background: "#0f0f0f",
                      color: "#fff",
                      borderTopRightRadius: "30px",
                      borderBottomRightRadius: "30px",
                      px: "15px",
                    }}
                  >
                    <ThumbDownAltIcon sx={{ marginRight: "5px" }} />
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction={"column"}
              sx={{
                background: "#252323",
                mt: "20px",
                p: "10px",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" color={"white"}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body2" ml={"15px"} color={"white"}>
                  {publishedAt.slice(0, 10)}
                </Typography>
              </Box>
              <Typography variant="body2" color={"white"} mt={"8px"}>
                {description}
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Videos videos={videos} direction="column"></Videos>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
