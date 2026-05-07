import Button from "@/components/ui/Button";
import CardActions from "@/components/ui/collapsibleCard/CardActions";
import CollapsibleCard from "@/components/ui/collapsibleCard/CollapsibleCard";
import OrSeperator from "@/components/ui/OrSeperator";
import { SearchableInput } from "@/components/ui/searchable-dropdown/SearchableInput";
import Select from "@/components/ui/Select";

export default function SuffixDetailsCard() {
  return (
    <CollapsibleCard title="Suffix Details">
      <CardActions
        sortable={false}
        heading="Suffix Overview"
        action={
          <Button variant="form" className="bg-white!">
            + Add Another Contact
          </Button>
        }
      />
      <div className="w-full py-2">
        <div className="grid grid-cols-12 gap-4 mt-2 mb-4">
          <div className="col-span-2">
            <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
              Suffix #
            </label>
            <Select
            //   {...register("code1")}
            >
              <option value="">Select Suffix</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </Select>
          </div>
          <div className="col-span-2">
            <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
              Dept #
            </label>
            <Select
            //   {...register("code2")}
            >
              <option value="">Select Dept</option>
              <option value="X">X</option>
              <option value="Y">Y</option>
            </Select>
          </div>
          <div className="col-span-8 grid grid-cols-[47.5%_5%_47.5%] gap-0">
            <div>
              <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
                Location Group
              </label>
              <SearchableInput
                items={[1, 2, 3]}
                getLabel={(item) => `Location group ${item}`}
                onChange={(item) => console.log(item)}
              />
            </div>

            <div>
              <OrSeperator />
            </div>

            <div>
              <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
                Location Number
              </label>
              <SearchableInput
                items={[1, 2, 3]}
                getLabel={(item) => `Location number ${item}`}
                onChange={(item) => console.log(item)}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-start">
          <div className="flex-3">
            <h3 className="text-base font-semibold mb-2 text-[#000000CC]">
              Tags
            </h3>
            <div className="w-full flex justify-start gap-4">
              <div className="flex justify-start items-center py-2 pr-10">
                <input type="checkbox" className="w-[22px] h-[22px] mr-2" />
                <label className="text-base font-semibold text-[#5A5A5A]">
                  Import
                </label>
              </div>
              <div className="flex justify-start items-center py-2 px-10">
                <input type="checkbox" className="w-[22px] h-[22px] mr-2" />
                <label className="text-base font-semibold text-[#5A5A5A]">
                  BBS Vendor
                </label>
              </div>
              <div className="flex justify-start items-center py-2 px-10">
                <input type="checkbox" className="w-[22px] h-[22px] mr-2" />
                <label className="text-base font-semibold text-[#5A5A5A]">
                  Cigarette
                </label>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label className="text-base font-semibold mb-2 text-[#000000CC]">
              Status
            </label>
            <Select className="w-full">
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </div>
        </div>
      </div>
    </CollapsibleCard>
  );
}
