import React from 'react'
import { useAuthContext } from '../../context/authContext';
import useConversation from '../../zustand/useConversation';
import {extractTime} from "../../utils/extractTime"

export const Message = ({message}) => {
  const {authUser} =useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe?'chat-end' : 'chat-start';
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe ? authUser.profilePic:selectedConversation?.profilePic;
  const bubbleBgColor = fromMe? 'bg-blue-700' : '';
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="userDp" />
        </div>
      </div>
      <div className={`chat-bubble text-white pb-2 ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div
        className={`chat-footer opacity-75 text-xs files gap-1 items-center`}
      >
        {formattedTime}
      </div>
    </div>
  );
}
