import { Server } from "socket.io";

const io = new Server(8900, {
  cors: {
    origin: "http://localhost:5173",
  },
});

let users = [];

function addUser(userId, socketId) {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
}
function removeUser(socketId) {
  users = users.filter((user) => user.socketId !== socketId);
}
function getUser(userId) {
  return users.find((user) => user.userId === userId);
}

io.on("connection", (socket) => {
  //when connect

  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    console.log(user);
    io.to(user?.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected.");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

/**
 {"_id":{"$oid":"652531045e213d772fbaa6d6"},"members":[{"senderId":"6524824db1fd54b95d309c64","receiverId":"65248266b1fd54b95d309c67"}],"createdAt":{"$date":{"$numberLong":"1696936196348"}},"updatedAt":{"$date":{"$numberLong":"1696936196348"}},"__v":{"$numberInt":"0"}}
 */
