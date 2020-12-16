import { IconButton, Modal } from "@material-ui/core";
import React, { useState } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

const NavVideo = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const video = getYouTubeID(
    "https://www.youtube.com/watch?v=f_eWqtxY5n0&t=181s"
  );

  return (
    <div>
      <IconButton onClick={handleOpen} color="inherit">
        <PlayCircleOutlineIcon fontSize="large" />
      </IconButton>
      <Modal open={open} onClose={handleClose} aria-labelledby="Puzzle Video">
        <div
          style={{
            position: "absolute",
            margin: "auto",
            width: "fit-content",
            height: "fit-content",
            left: "0",
            top: "0",
            bottom: "0",
            right: "0",
          }}
        >
          <YouTube videoId={video} opts={opts} />
        </div>
      </Modal>
    </div>
  );
};

export default NavVideo;
