import React from "react";
import { Conversation } from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";

export const Conversations = () => {
  const { loading, conversations } = useGetConversation();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations && conversations.length > 0
        ? conversations.map((conv, idx) => (
            <Conversation
              key={conv._id}
              conversation={conv}
              emoji={getRandomEmoji()}
              lastIdx={idx === conversations.length - 1}
            />
          ))
        : !loading && <p>No conversations available.</p>}
      {loading && <span className="loading loading-spinner mx-auto"></span>}
    </div>
  );
};
