const mongoose = require("mongoose");
const Chat = require("./models/chat");
main()
  .then((data) => {
    console.log("connection is successfull...!");
  })

  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//============================ inserting the data bahut sare data at single time in schema-->

let AllChats = [
  {
    from: "honey",
    to: "gyan",
    msg: "hyy how are you..",
    created_at: new Date(),
  },
  {
    from: "gyan",
    to: "honey",
    msg: "I'm good, how about you?",
    created_at: new Date(),
  },
  {
    from: "alice",
    to: "bob",
    msg: "Hey Bob, long time no see!",
    created_at: new Date(),
  },
  {
    from: "bob",
    to: "alice",
    msg: "Yeah, it's been a while! How have you been?",
    created_at: new Date(),
  },
  {
    from: "carol",
    to: "dave",
    msg: "Are we still on for lunch today?",
    created_at: new Date(),
  },
  {
    from: "dave",
    to: "carol",
    msg: "Yes, definitely! Looking forward to it.",
    created_at: new Date(),
  },
  {
    from: "eve",
    to: "frank",
    msg: "Can you send me the report by tonight?",
    created_at: new Date(),
  },
  {
    from: "frank",
    to: "eve",
    msg: "Sure thing, I'll have it ready by then.",
    created_at: new Date(),
  },
  {
    from: "george",
    to: "hannah",
    msg: "Happy Birthday! Hope you have a great day!",
    created_at: new Date(),
  },
];

Chat.insertMany(AllChats);
