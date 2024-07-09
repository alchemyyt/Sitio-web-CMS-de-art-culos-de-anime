import React from "react";

const YoutubeVideo = ({ data }) => {
  return (
    <iframe
      className=" mx-auto inline-block w-11/12 h-60 rounded-md m-6  lg:w-4/6 lg:h-96"
      src={data}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
};

export default YoutubeVideo;
