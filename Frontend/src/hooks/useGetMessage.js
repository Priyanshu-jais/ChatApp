import React, { useEffect } from 'react'
import { useState } from 'react';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';
const useGetMessage = () => {
 const [loading,setLoading] = useState(false);
 const { messages, setMessages, selectedConversation } = useConversation();

 useEffect(() => {
   const getMessage = async () => {
     setLoading(true);
     try {
       const res = await fetch(`/api/messages/${selectedConversation._id}`);
       const data = await res.json();
       if (data.error) throw new Error(data.error);
       setMessages(data);
     } catch (error) {
       toast.error(error.message);
     } finally {
       setLoading(false);
     }
   };
   if (selectedConversation._id) getMessage();
 }, [selectedConversation._id,setMessages]);

 return {messages,loading};
}

export default useGetMessage;
