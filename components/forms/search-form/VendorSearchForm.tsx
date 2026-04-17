"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import OrSeperator from "../../ui/OrSeperator";
import { SearchableInput } from "../../ui/searchable-dropdown/SearchableInput";
import { useAppDispatch } from "@/store/hooks";
import { setShowSearchList } from "@/store/slices/searchSlice";

export default function VendorSearchForm() {
  const dispatch = useAppDispatch();

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search functionality to be implemented");
    dispatch(setShowSearchList(true));
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-4 mb-6">
        <div className="col-span-2">
          <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
            Company
          </label>
          <Select
          // {...register("company")}
          >
            <option value="">Select Company</option>
            <option value="company1">Company 1</option>
            <option value="company2">Company 2</option>
          </Select>
        </div>

        <div className="col-span-10 grid grid-cols-[47.5%_5%_47.5%] gap-0">
          <div>
            <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
              Supplier Name
            </label>
            <Input
              placeholder="Enter Supplier Name"
              //    {...register("name")}
            />
          </div>

          <div>
            <OrSeperator />
          </div>

          <div>
            <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
              Supplier Number
            </label>
            <Input
              placeholder="Enter Supplier Number"
              //   {...register("id")}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
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

      <div className="w-full flex items-end">
        <div className="w-[90%] text-gray-900 text-[16px]">
          Tip: You must search name database before creating a{" "}
          <span className="font-bold">new supplier.</span>
        </div>
        {/* Buttons */}
        <div className="w-[10%] flex flex-col gap-3 mt-6">
          <Button
            type="button"
            variant="secondary"
            onClick={() => console.log("Clear fields to be implemented")}
            className="bg-transparent! text-gray-800 border-none font-bold text-right text-[16px]"
          >
            Clear Fields
          </Button>

          <Button type="submit" variant="primary" className="text-[16px]">
            Run Search
          </Button>
        </div>
      </div>
    </form>
  );
}
