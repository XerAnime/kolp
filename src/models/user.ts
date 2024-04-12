import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
