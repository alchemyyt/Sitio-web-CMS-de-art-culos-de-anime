import React from "react";

const Facebook = () => {
  return (
    <div className=" p-2 grid grid-cols-1 place-items-center w-full lg:h-full ">
      <iframe
        className="overflow-hidden border-0 lg:h-full"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fanimecastellano&tabs=timeline&width=320&height=2000&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
        width="320"
        height="2000"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Facebook;
