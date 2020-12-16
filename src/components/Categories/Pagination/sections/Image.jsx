import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { registerObserver } from "../../../../helpers/intersectionObserver";
export default function Image({ src, alt, style }) {
  const [showImage, setShowImage] = useState(false);
  const placeHolderRef = useRef(null);
  // Component Did Mount.
  useEffect(() => {
    /**
     * To Register Observer on the span.
     */
    registerObserver(placeHolderRef.current, setShowImage);
  }, []);

  if (showImage) {
    return (
      <motion.img
        src={src}
        alt={alt}
        style={{ width: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    );
  }
  return (
    <div
      ref={placeHolderRef}
      alt={alt}
      style={{
        width: "100%",
        height: "0",
        background: "gray",
        paddingBottom: "100%",
      }}
    />
  );
}
