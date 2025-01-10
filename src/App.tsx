import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }, [isPlaying]);
  return <video src={src} ref={ref} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <a
        onClick={() => setIsPlaying(!isPlaying)}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <VideoPlayer
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          isPlaying={isPlaying}
        ></VideoPlayer>
      </a>
    </>
  );
}
