import { useState } from "react";
import { EllipsisVertical, Trash } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { Link } from "react-router";

export default function Sheet({ id, children }) {
  const [edit, setEdit] = useState(false);

  const removeSheet = useMutation(api.sheet.remove);
  const deleteBySheetName = useMutation(api.deleteDocumentsBySheetName.deleteBySheetName);

  async function handleRemoveClick() {
    await removeSheet({ id });
    await deleteBySheetName({ sheetName: children });
  }
  
  return (
    <>
      <Link to={`/${children}`}>
        <div className="bg-sky-200 h-20 flex items-center justify-between px-6 rounded-lg">
          <span className="font-inter font-normal text-3xl">
            {children}
          </span>
          <div
            className="relative hover:bg-sky-100 rounded-xl"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setEdit(!edit)
            }}
          >
            <EllipsisVertical size={24} className="cursor-pointer" />
            {edit && (
              <div className="absolute">
                <button onClick={handleRemoveClick} type="button" className="cursor-pointer w-[140px] h-[37px] bg-e8e8e8 hover:bg-gray-300 rounded-lg flex items-center justify-start px-2 gap-3">
                  <Trash size={20} />
                  <span className="font-inter font-medium text-2xl">Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}