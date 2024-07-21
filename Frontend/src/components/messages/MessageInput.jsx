import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
export const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-200 text-gray-900 placeholder-gray-900"
          placeholder="Send a message...."
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsFillSendFill className='text-gray-800'/>
        </button>
      </div>
    </form>
  );
}
