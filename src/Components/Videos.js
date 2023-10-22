import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap={"wrap"}
      gap={2}
      justifyContent={"center"}
      alignItems={"center"}
      
    >
      {videos
        ? videos.map((item, index) => (
            <Box key={index} >
              {item.id.videoId && <VideoCard video={item}></VideoCard>}
              {item.id.channelId && (
                <ChannelCard channelDetail={item}></ChannelCard>
              )}
            </Box>
          ))
        : "wait for a second..."}
    </Stack>
  );
};

export default Videos;
