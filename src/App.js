import "./App.css";
import { useRef } from "react";

function App() {
  const videoRef = useRef();
  const buttonRef = useRef();
  const pipMode = () => {
    const pipButton = buttonRef.current;
    const video = videoRef.current;
    pipButton.hidden = !document.pictureInPictureEnabled;
    if (!document.pictureInPictureElement) {
      video.requestPictureInPicture().catch((error) => {});
    } else {
      document.exitPictureInPicture().catch((error) => {});
    }
  };
  return (
    <>
      <div className="app">
        <video className="app__video" ref={videoRef} controls>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
        <button ref={buttonRef} onClick={pipMode}>
          PictureInPictureMode
        </button>
      </div>
    </>
  );
}

export default App;
