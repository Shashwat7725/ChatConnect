import React, { useState, useRef } from "react";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";
import { Chat } from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import "./App.css";
import Room from "./components/Room";
import NavWithSignOut from "./components/NavWithSignOut";
const cookies = new Cookies();
const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };
  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <>
      {room ? (
        <Chat room={room} signUserOut={signUserOut} />
      ) : (
        <div className="container">
          <NavWithSignOut signUserOut={signUserOut} />
          <Room roomInputRef={roomInputRef} setRoom={setRoom} />
        </div>
      )}
    </>
  );
};

export default App;
