import { api } from "../convex/_generated/api";
import Sheet from "./Sheet";
import { useQuery } from "convex/react";

export default function SheetList() {
  const sheetList = useQuery(api.sheet.getSheetList) || [];

  return (
    <div className="grid grid-cols-2 w-full max-w-3/4 mx-auto gap-x-20 gap-y-12 mb-15">
      {sheetList.map((sheet) => (
        <Sheet key={sheet._id} id={sheet._id}>{sheet.name}</Sheet>
      ))}
    </div>
  );
}