import { useEffect, useRef, useState } from "react";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      ></VideoPlayer>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "PAUSE" : "PLAY"}
      </button>
    </>
  );
}

interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
  const ref = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video src={src} ref={ref} loop playsInline></video>;
}
