import Button from "../ui/Button";

export default function CreateEditHeader() {
  return (
    <div className="w-full flex bg-white h-[70px] justify-between items-center p-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <h2 className="text-[32px] flex-3 text-[#1E1E1E] font-semibolf">
        Supplier #12344 + Suffix
      </h2>
      <div className="flex flex-1 justify-between items-center gap-3">
        <Button variant="primary" className="flex-1">
          View
        </Button>
        <Button variant="secondary" className="flex-3">
          Save All Changes
        </Button>
      </div>
    </div>
  );
}
