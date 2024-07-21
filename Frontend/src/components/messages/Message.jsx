import React from 'react'

export const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://avatar.iran.liara.run/public/girl/" alt='userDp'/>
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-700`}>
        Hii! what is upp?
      </div>
      <div className={`chat-footer opacity-75 text-xs files gap-1 items-center`}>12:42</div>
    </div>
  );
}
