import React from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { MessageContainer } from '../../components/messages/MessageContainer'
export const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:w-[1450px] md:h-[800px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}
