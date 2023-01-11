import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
// import User1 from "../img/user1.png";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("displayName", "==", userName));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setError(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      console.log(res, "res");
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        const userChatsRef = doc(db, "userChats", user.uid);
        await await updateDoc(userChatsRef, {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        const currentUserChatsRef = doc(db, "userChats", currentUser.uid);
        await await updateDoc(currentUserChatsRef, {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setUser(null);
    setUserName("");
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a friend"
          onKeyDown={handleKey}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
      </div>
      {error && <span>User not found</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
