export default function EditableTable() {
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

        </tbody>
      </table>
    </div>
  );
}