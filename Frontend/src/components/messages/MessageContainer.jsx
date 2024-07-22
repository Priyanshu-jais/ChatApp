import React, { useEffect } from 'react'
import { Messages } from './Messages'
import { MessageInput } from './MessageInput'
import {TiMessages} from "react-icons/ti"
import useConversation from '../../zustand/useConversation'

export const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation} = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[1150px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* header */}
          <div className="bg-slate-500 px-4 mb-2 text-2xl h-[50px] flex items-center font-serif">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold ml-2">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋🏻 Priyanshu ✨</p>
        <p>Select a chat to start a new conversation 💫</p>
        <TiMessages className="text-3xl md:text-6xl text-center"/>
      </div>
    </div>
  );
}

