import mongoose, { model, Schema } from "mongoose";

mongoose.connect(
  "mongodb+srv://ashish:ecommerce@ecommerce.784rp.mongodb.net/second-brain"
);
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

export const User = model("User", userSchema);

const contentSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  tags: {
    type: mongoose.Types.ObjectId,
    ref: "Tags",
  },
});

export const Content = model("Content", contentSchema);
