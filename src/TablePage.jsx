import Header from "./Header";
import { Plus } from "lucide-react";
import { Search } from "lucide-react";
import EditableTable from "./EditableTable";

export default function TablePage() {
  return (
    <>
      <Header />
      <div className="flex justify-between items-center w-full max-w-4/5 mx-auto mb-15">
        <h1 className="font-inter font-black text-5xl">Figma</h1>
        <button type="button" className="flex gap-3 px-2 py-1 rounded-lg justify-between items-center bg-e8e8e8 hover:bg-gray-300">
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
          className="pl-12 rounded-4xl w-full min-h-10 border "
        />
      </div>
      <EditableTable />
    </>
  );
}