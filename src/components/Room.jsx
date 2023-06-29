import React from "react";
import "../styles/room.css";
const Room = ({ roomInputRef, setRoom }) => {
  return (
    <>
      <div className="room">
        <label className="label">Enter Room Name:</label>
        <input ref={roomInputRef} type="text" className="room-input" />
        {/* we used useRef as we do not want to re-render component as soon as we start typing instead we want to reference the whole value of the input once typing is done. */}
        <button
          className="chat-btn"
          onClick={() => setRoom(roomInputRef.current.value)}
        >
          Enter Chat
        </button>
      </div>
    </>
  );
};

export default Room;
