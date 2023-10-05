import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard,ChannelCard } from './';






const Videos = ( {videos,direction} ) => {

  if(!videos?.length) return 'Loading...'; 

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" sx={{ justifyContent: {xs: 'center', sm: 'center', md: 'start'}}} gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}

        </Box>
      ))}
    </Stack>
  )
}

export default Videos