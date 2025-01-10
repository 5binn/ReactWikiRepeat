import { useRef } from "react";

export default function App() {
  const firstRef = useRef<HTMLImageElement | null>(null);
  const secondRef = useRef<HTMLImageElement | null>(null);
  const thirdRef = useRef<HTMLImageElement | null>(null);

  function handleScrollToFirstCat() {
    firstRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToSecondCat() {
    secondRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToThirdCat() {
    thirdRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>Tom</button>
        <button onClick={handleScrollToSecondCat}>Maru</button>
        <button onClick={handleScrollToThirdCat}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src=" https://loremflickr.com/300/200"
              alt="Tom"
              ref={firstRef}
            />
          </li>
          <li>
            <img
              src="https://picsum.photos/300/200"
              alt="Maru"
              ref={secondRef}
            />
          </li>
          <li>
            <img
              src="https://placehold.co/300x200"
              alt="Jellylorum"
              ref={thirdRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
