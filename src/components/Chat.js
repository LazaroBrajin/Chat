// components/Chat.js
import React, { useEffect, useState } from "react";
import { auth, firestore } from "../firebase/firebase";

const Chat = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>Chat</h2>
      {user ? (
        <p>Welcome, {user.displayName}!</p>
      ) : (
        <p>Please sign in to access the chat.</p>
      )}
    </div>
  );
};

export default Chat;
