import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { BsSend } from "react-icons/bs";
import "../styles/chat.css";
import NavWithSignOut from "./NavWithSignOut";
export const Chat = (props) => {
  const { room, signUserOut } = props;
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: room,
      photoUrl: auth.currentUser.photoURL,
      messageId: auth.currentUser.uid,
    });
    setNewMessage("");
  };
  const getMessageClass = (senderId) => {
    return `message-${senderId}`;
  };
  return (
    <div className="container">
      <NavWithSignOut signUserOut={signUserOut} />
      <div className="chat-app">
        <div className="header">
          <h1>Welcome to {room.toUpperCase()}</h1>
        </div>
        <div className="messages">
          {messages.map((message) => {
            {
              /* Adding class to messages */
            }
            let senderId;
            if (message.messageId === auth.currentUser.uid) senderId = 1;
            else senderId = 2;
            return (
              <div className={`chat-box ${getMessageClass(senderId)}`}>
                <img
                  className="display-picture"
                  referrerPolicy="no-referrer"
                  src={message.photoUrl}
                ></img>
                <div className="message">
                  <div className="user-info">
                    <h4 className="user">{message.user}</h4>
                  </div>
                  <div className="flex message-info">
                    <h5 className="text-message">{message.text}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <form onSubmit={handleSubmit} className="new-message-form">
          <input
            className="new-message-input"
            placeholder="Type your message here..."
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          ></input>
          <button type="submit" className="send-button">
            <span>
              <BsSend />
            </span>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
