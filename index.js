const methodOverride = require("method-override");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./models/chat");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

main()
  .then(() => {
    console.log("Connection is successful!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

// New Chat Route
app.get("/chats/new", (req, res) => {
  res.render("newChat.ejs");
});
app.post("/chats", async (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({ from, to, msg, created_at: new Date() });
  await newChat.save();
  res.redirect("/chats");
});

// Edit Chat Route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { message: newMsg } = req.body;
  await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
  );
  res.redirect("/chats");
});

// delete(destroy) Chat Route
app.delete("/chats/:id", async(req, res)=>{
  let{id} = req.params;
  let ChatDeleted = await Chat.findByIdAndDelete(id);
  // console.log(ChatDeleted);
  res.redirect("/chats");

})

// Home Route
app.get("/", (req, res) => {
  res.send("Root is working...");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
