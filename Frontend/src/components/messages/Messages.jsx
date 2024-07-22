import React, { useEffect,useRef } from 'react'
import { Message } from './Message'
import useGetMessage from '../../hooks/useGetMessage'
import MessageSkeleton from '../skeletons/messageSkeletons'

export const Messages = () => {
  const { messages,loading} = useGetMessage();
  
  const lastMessageRef=useRef();
  useEffect(() => {
   setTimeout(() => {
     lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
   },100)
  },[messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center text-black">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
}
