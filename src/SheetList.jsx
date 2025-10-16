import Sheet from "./Sheet";

export default function SheetList() {
  return (
    <div className="grid grid-cols-2 w-full max-w-3/4 mx-auto gap-x-20 gap-y-12 mb-15">
      <Sheet>Figma</Sheet>
      <Sheet>Linux</Sheet>
      <Sheet>Vim</Sheet>
    </div>
  );
}