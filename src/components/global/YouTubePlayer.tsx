import React from "react";

export const YouTubePlayer = ({id}: { id: string }) => (
  <div className="youtube-player">
    <iframe
      loading={"lazy"}
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      // allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
