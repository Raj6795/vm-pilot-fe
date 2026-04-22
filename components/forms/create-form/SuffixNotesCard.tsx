import CollapsibleCard from "@/components/ui/collapsibleCard/CollapsibleCard";

export default function SuffixNotesCard() {
  return (
    <CollapsibleCard title="Suffix Notes">
      <div>
        <textarea className="bg-white w-full border-2 border-[#383838] rounded-[2px] h-[76px] resize-none p-2" />
      </div>
    </CollapsibleCard>
  );
}
