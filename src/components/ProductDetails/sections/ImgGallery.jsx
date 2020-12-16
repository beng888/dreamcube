import React from "react";
import ImageGallery from "react-image-gallery";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const ImgGallery = ({ assets }) => {
  const imageAssets =
    assets &&
    assets.map((image) => {
      const container = {};

      container.original = image.url;
      container.thumbnail = image.url;

      return container;
    });

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const GalleryProps = {
    thumbnailPosition: isSmallScreen ? "bottom" : "left",
    showThumbnails: isMediumScreen ? false : true,
    showBullets: isMediumScreen ? true : false,
  };

  return (
    <>
      {assets ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ImageGallery
            showNav={false}
            showPlayButton={false}
            {...GalleryProps}
            items={imageAssets}
          />{" "}
        </motion.div>
      ) : (
        <img
          src="https://www.watlingmedicalpractice.nhs.uk/wp-content/plugins/post-grid/assets/frontend/images/placeholder.png"
          alt="img gallery"
          style={{ width: "100%" }}
        />
      )}
    </>
  );
};

export default ImgGallery;
