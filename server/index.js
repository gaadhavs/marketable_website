const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserDataModel = require("./models/userdata");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://amalkrishna:GdkmBBACsi7M0ZPY@marketable.rifrjt3.mongodb.net/?retryWrites=true&w=majority&appName=marketable"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/register", async (req, res) => {
    try {
        const userdata = await UserDataModel.create(req.body);
        res.status(201).json(userdata);
      } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).json({ error: "An error occurred while registering the user" });
      }
    });
    
app.listen(3001, () => {
  console.log("server is");
});
