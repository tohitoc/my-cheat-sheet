import Header from "./Header";
import { Plus } from "lucide-react";
import SheetList from "./SheetList";

export default function Sheets() {
  return (
    <>
      <Header />
      <div className="flex justify-between items-center w-full max-w-4/5 mx-auto mb-15">
        <h1 className="font-inter font-black text-5xl">Sheets</h1>
        <button type="button" className="flex gap-3 px-2 py-1 rounded-lg justify-between items-center bg-e8e8e8 hover:bg-gray-300">
          <Plus size={24} />
          <span className="font-inter text-2xl font-medium">Add Sheet</span>
        </button>
      </div>
      <SheetList />
    </>
  );
}