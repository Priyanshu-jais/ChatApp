import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import { useEffect } from "react";
import notifications from "../assets/sound/notification.mp3"
const useListenedMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      // Ensure you're correctly appending new messages
      newMessage.shouldShake = true;
      const sound = new Audio(notifications);
      sound.play();
      setMessages( [...messages, newMessage]);
    };

    socket?.on("newMessage", handleNewMessage);

    return () => {
      socket?.off("newMessage", handleNewMessage);
    };
  }, [socket, setMessages,messages]);

  return null;
};

export default useListenedMessages;
