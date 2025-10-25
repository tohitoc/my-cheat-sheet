import { useState } from "react";
import { EllipsisVertical, SquarePen, Trash } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export default function Sheet({ id, children }) {
  const [edit, setEdit] = useState(false);
  const [modalWindow, setModalWindow] = useState(false);
  const [name, setName] = useState("");

  const updateSheet = useMutation(api.sheet.update);
  const removeSheet = useMutation(api.sheet.remove);

  async function handleRemoveClick() {
    await removeSheet({ id });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (name === "") return;
    await updateSheet({ id: id, name: name });
    setName("");
    setModalWindow(false);
    setEdit(false);
  }
  
  return (
    <>
      <div className="bg-sky-200 h-20 flex items-center justify-between px-6 rounded-lg">
        <span className="font-inter font-normal text-3xl">
          {children}
        </span>
        <div type="button" className="relative hover:bg-sky-100 rounded-xl" onClick={() => setEdit(!edit)}>
          <EllipsisVertical size={24} className="cursor-pointer" />
          {edit && (
            <div className="absolute">
              <button onClick={() => setModalWindow(true)} type="button" className="cursor-pointer w-[140px] h-[37px] bg-e8e8e8 hover:bg-gray-300 rounded-lg flex items-center justify-start px-2 gap-3">
                <SquarePen size={20} />
                <span className="font-inter font-medium text-2xl">Rename</span>
              </button>
              <button onClick={handleRemoveClick} type="button" className="cursor-pointer w-[140px] h-[37px] bg-e8e8e8 hover:bg-gray-300 rounded-lg flex items-center justify-start px-2 gap-3">
                <Trash size={20} />
                <span className="font-inter font-medium text-2xl">Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>
      {modalWindow && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="bg-white py-5 px-6 w-[384px] min-h-[176px] rounded-sm">
            <label className="font-inter text-xl font-normal block mb-2">Sheet Name</label>
            <input className="border rounded-sm mb-9 w-full font-inter text-lg font-normal"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <div className="flex justify-between w-full">
              <button onClick={() => setModalWindow(false)} type="button" className="cursor-pointer hover:bg-gray-300 w-[162px] h-[44px] bg-e8e8e8 font-inter font-normal text-xl">
                Cancel
              </button>
              <button type="submit" className="cursor-pointer hover:bg-gray-300 w-[162px] h-[44px] bg-e8e8e8 font-inter font-normal text-xl">
                OK
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}