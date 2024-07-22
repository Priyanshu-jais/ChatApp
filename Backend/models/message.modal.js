import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: "string",
      required: true,
    },
    //createdAt , updatedAt => message.createdAt
  },
  { timestamps: true }
);
const Message = mongoose.model("Message", messageSchema);
export default Message;