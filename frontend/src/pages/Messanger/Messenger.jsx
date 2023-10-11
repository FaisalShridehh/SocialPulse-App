import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";

// ----------------------------------------------------------------

import Conversations from "../../components/Conversations/Conversations";
import Message from "../../components/Message/Message";
import TopBar from "../../components/TopBar/TopBar";
import { ChatInput } from "../../components/ChatInput/ChatInput";
import ChatOnline from "../../components/ChatOnline/ChatOnline";

const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

export default function Messenger() {
  const { user } = useContext(AuthContext);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  // const [socket, setSocket] = useState(null);

  /**
   * here is the useRef instead of useEffect
   * ||
   * \/
   */
  const socket = useRef();
  useEffect(() => {
    socket.current = io("ws://localhost:8900");

    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
    return () => {
      socket.current.disconnect();
    };
  }, []);

  // useEffect(() => {
  //   socket.current.on("getMessage", (data) => {
  //     setArrivalMessage({
  //       sender: data.senderId,
  //       text: data.text,
  //       createdAt: Date.now(),
  //     });
  //   });
  // }, []);

  /**
   * instead of the use effect below
   * i can use useRef instead
   * ||
   * \/
   */
  // useEffect(() => {
  //   setSocket(io("ws://localhost:8900"));
  // }, []);
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      // console.log("user from Messenger => ", user);
      // console.log("user.followings from Messenger => ", user.followings);
      // console.log("users from Messenger => ", users);
      // console.log(
      //   "user.followings.filter((f) => users.some((u) => u.userId !== f)) => ",
      //   user.followings.filter((f) => users.some((u) => u.userId !== f))
      // );
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId !== f))
      );
    });
  }, [user]);

  // console.log("Online users from Messenger => ", onlineUsers);
  useEffect(() => {
    // console.log(user)
    async function getConversations() {
      try {
        const response = await axios.get(
          `${BaseBackEndUrl}conversation/${user?._id}`
        );

        if (response.status !== 200)
          throw new Error("Error getting conversations from server");

        // console.log("Conversations => ", response.data);
        setConversations(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getConversations();
  }, [user]);

  useEffect(() => {
    async function getMessages() {
      try {
        const response = await axios.get(
          `${BaseBackEndUrl}messages/${currentChat?._id}`
        );

        if (response.status !== 200) throw new Error("Error getting messages");

        // console.log(response.data);
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMessages();
  }, [currentChat]);

  async function handleMessageSubmit(e) {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    console.log("currentChat => ", currentChat);

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    // console.log("Sending message to receiverId:", receiverId);

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    console.log("Message sent:", newMessage); // Add this line

    try {
      const response = await axios.post(`${BaseBackEndUrl}messages`, message);

      if (response.status !== 201)
        throw new Error("Error creating new message");

      console.log("creating new message => ", response.data);
      setMessages([...messages, response.data.SavedMessages]);
      setNewMessage("");
    } catch (error) {
      console.error(error);
    }
  }

  // console.log("Current Chat => " , currentChat);
  return (
    <>
      <TopBar />
      <div className="messenger flex h-[calc(100vh-60px)]">
        <div className="chat-menu flex-[3.5] border-r border-r-neutral-400/30  border-t-[0.5px] border-t-neutral-400/30 bg-white">
          <div className="chat-menu-wrapper p-3 h-full">
            {/* <!--Search input--> */}
            {/* <form> */}
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                placeholder="Search For Friends"
                // required
              />
              <button
                type="submit"
                className=" text-white absolute right-2.5 bottom-2.5 bg-[#4e5ed8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
            {/* </form> */}

            {conversations.map((conversation) => (
              <div
                key={conversation._id}
                onClick={() => setCurrentChat(conversation)}
              >
                <Conversations
                  key={conversation._id}
                  conversation={conversation}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="chat-box flex-[5.5] bg-white  ">
          <div className="chat-box-wrapper relative  flex flex-col justify-between  h-full overflow-y-scroll scroll-smooth">
            {currentChat ? (
              <>
                <div className="chat-box-top p-3 ">
                  {messages.map((message) => (
                    <Message
                      key={message?._id}
                      message={message}
                      own={message?.sender === user?._id}
                    />
                  ))}
                </div>
                <div className="chat-box-bottom sticky bottom-0 left-0 p-0 m-0 ">
                  <ChatInput
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    handleMessageSubmit={handleMessageSubmit}
                  />
                </div>
              </>
            ) : (
              <span className="no-chat-text absolute top-[10%] text-4xl text-gray-500 cursor-default p-2">
                Choose A conversation to start chatting
              </span>
            )}
          </div>
        </div>
        <div className="chat-online flex-[3]">
          <div className="chat-online-wrapper p-3 h-full border-l border-l-neutral-400/30  border-t-[0.5px] border-t-neutral-400/30 bg-white divide-y-[1px]">
            <h3 className="text-lg font-semibold text-[#242222]">
              Online Friends
            </h3>
            <div className="flex flex-col divide-y-[0.5px]">
              <ChatOnline
                onlineUsers={onlineUsers}
                currentId={user?._id}
                setCurrentChat={setCurrentChat}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
