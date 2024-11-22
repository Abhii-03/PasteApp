import React from "react";
import {  useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
// import { addToPastes, updateToPastes } from "../redux/pasteSlice";

export const ViewPaste = () => {
  const {id} = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id) [0]
  return (
    <div>
      <div className="flex gap-10 min-w-[500px] justify-between">
        <input
          className=" mt-5 border border-black rounded-lg p-2"
          type="text"
          placeholder="Enter text here"
          value={paste.title}
          disabled
          onChange={(event) => setTitle(event.target.value)}
        />
        
      </div>
      <div>
        <textarea
          className="mt-5  border border-black p-2"
          value={paste.content}
          disabled
          placeholder="Enter content here.."
          onChange={(event) => setValue(event.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};
