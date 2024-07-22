import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

export const SearchInput = () => {
  const [search,setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error('Search term must be at least 3 characters long');
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else{
      toast.error("No such user found");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-700 text-white">
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}
