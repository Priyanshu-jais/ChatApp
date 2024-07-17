import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: "string",
      required: true,
    },
    userName: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
      minLength: 6,
    },
    gender: {
      type: "string",
      required: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: "string",
      default: "",
    },
  },
  //createdAt,updatedAt => Membersince createdAt
  { timestamps: true }
);

const User = mongoose.model('User',userSchema);
export default User