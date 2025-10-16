import { useState } from "react";
import { EllipsisVertical, SquarePen, Trash } from "lucide-react";

export default function Sheet({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-sky-200 h-20 flex items-center justify-between px-6 rounded-lg">
      <span className="font-inter font-normal text-3xl">
        {children}
      </span>
      <button type="button" className="relative hover:bg-sky-100 rounded-xl" onClick={handleClick}>
        <EllipsisVertical size={24} />
        {isOpen && (
          <div className="absolute">
            <button type="button" className="w-[140px] h-[37px] bg-e8e8e8 hover:bg-gray-300 rounded-lg flex items-center justify-start px-2 gap-3">
              <SquarePen size={20} />
              <span className="font-inter font-medium text-2xl">Rename</span>
            </button>
            <button type="button" className="w-[140px] h-[37px] bg-e8e8e8 hover:bg-gray-300 rounded-lg flex items-center justify-start px-2 gap-3">
              <Trash size={20} />
              <span className="font-inter font-medium text-2xl">Delete</span>
            </button>
          </div>
        )}
      </button>
    </div>
  );
}