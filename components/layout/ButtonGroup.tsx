import Button from "../ui/Button";

export default function ButtonGroup() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-row gap-4 justify-center items-center mb-4">
        <Button variant="primary" className="p-4">
          View This Supplier/Suffix
        </Button>
        <Button variant="primary" className="p-4">
          Edit This Supplier/Suffix
        </Button>
      </div>
      <div className="w-full flex flex-row gap-4 justify-center items-center mb-4">
        <Button variant="secondary" className="p-8 text-black border">
          Delete This Suffix
        </Button>
      </div>
    </div>
  );
}
