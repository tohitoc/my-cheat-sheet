import Header from "./Header";
import { Plus, Search } from "lucide-react";
import EditableTable from "./EditableTable";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export default function Commands() {
  const [open, setOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [description, setDescription] = useState("");
  const addRow = useMutation(api.commands.addRow);
  const [query, setQuery] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await addRow({ command: command, description: description });
    setCommand("");
    setDescription("");
    setOpen(false);
  }

  return (
    <>
      <Header />
      <div className="flex justify-between items-center w-full max-w-4/5 mx-auto mb-15">
        <h1 className="font-inter font-black text-5xl">Windows</h1>
        <button onClick={() => setOpen(true)} type="button" className="cursor-pointer flex gap-3 px-2 py-1 rounded-lg justify-between items-center bg-e8e8e8 hover:bg-gray-300">
          <Plus size={24} />
          <span className="font-inter text-2xl font-medium">Add Row</span>
        </button>
      </div>
      <div className="mx-auto bg-white relative max-w-60 mb-15">
        <div className="absolute left-0 pl-4 flex items-center inset-y-0 pointer-events-none">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 rounded-4xl w-full min-h-10 border "
        />
      </div>
      <EditableTable inputText={query} />
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="bg-white py-5 px-6 w-[384px] min-h-[176px] rounded-sm">
            <label className="font-inter text-xl font-normal block mb-2">Command</label>
            <input className="border rounded-sm mb-4 w-full font-inter text-lg font-normal"
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              autoFocus
            />
            <label className="font-inter text-xl font-normal block mb-2">Description</label>
            <input className="border rounded-sm mb-9 w-full font-inter text-lg font-normal"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex justify-between w-full">
              <button onClick={() => setOpen(false)} type="button" className="cursor-pointer hover:bg-gray-300 w-[162px] h-[44px] bg-e8e8e8 font-inter font-normal text-xl">
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