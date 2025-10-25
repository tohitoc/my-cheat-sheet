import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export default function EditableTable({ inputText }) {
  const data = useQuery(api.commands.search, { inputText: inputText }) || [];
  const updateCommand = useMutation(api.commands.update);
  const removeCommand = useMutation(api.commands.remove);

  const [selectedRow, setSelectedRow] = useState(null);
  const [editing, setEditing] = useState({ id: null, field: null });

  useEffect(() => {
    const handleDelete = async (e) => {
      if (e.key === "Delete" && selectedRow) {
        await removeCommand({ id: selectedRow });
        setSelectedRow(null);
      }
    };
    window.addEventListener("keydown", handleDelete);
    return () => window.removeEventListener("keydown", handleDelete);
  }, [selectedRow, removeCommand]);

  const handleDoubleClick = (id, field) => {
    setEditing({ id, field });
  };

  const handleChange = async (id, field, value) => {
    await updateCommand({ id, field, value });
  };

  const handleBlur = () => {
    setEditing({ id: null, field: null });
  };

  return (
    <div className="max-w-3/5 mx-auto">
      <table className="w-full border border-collapse border-gray-300">
        <thead className="bg-e8e8e8">
          <tr className="font-inter text-xl h-10 text-left">
            <th className="border border-gray-300 w-2/5 font-medium pl-5">Command</th>
            <th className="border border-gray-300 w-3/5 font-medium pl-5">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row._id}
              className={`cursor-pointer ${
                selectedRow === row._id 
                  ? "outline outline-blue-400" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedRow(row._id)}
            >
              <td
                className="border border-gray-300 pl-5 w-2/5 font-inter font-normal text-lg py-4 pr-2"
                onDoubleClick={() => handleDoubleClick(row._id, "command")}
              >
                {editing.id === row._id && editing.field === "command" ? (
                  <input
                    className="w-full focus:outline-none"
                    defaultValue={row.command}
                    onChange={(e) =>
                      handleChange(row._id, "command", e.target.value)
                    }
                    onBlur={handleBlur}
                    autoFocus
                  />
                ) : (
                  row.command
                )}
              </td>
              <td
                className="border border-gray-300 pl-5 w-3/5 font-inter font-normal text-lg py-4 pr-2"
                onDoubleClick={() => handleDoubleClick(row._id, "description")}
              >
                {editing.id === row._id && editing.field === "description" ? (
                  <input
                    className="w-full focus:outline-none"
                    defaultValue={row.description}
                    onChange={(e) =>
                      handleChange(row._id, "description", e.target.value)
                    }
                    onBlur={handleBlur}
                    autoFocus
                  />
                ) : (
                  row.description
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}