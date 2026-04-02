"use client";

// import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
// import { UserSearchFormValues } from "@/types/search";
// import { register } from "next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup";

// type Props = {
//   onSearch: (values: UserSearchFormValues) => void;
// };

export default function VendorSearchForm() {
  // { onSearch }: Props
  //   const {
  //     register,
  //     handleSubmit,
  //     reset,
  //   } = useForm<UserSearchFormValues>();

  return (
    <form
    //   onSubmit={handleSubmit(onSearch)}
    // className=""
    >
      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-4 mb-6">
        <div className="col-span-2">
          <label className="block text-md text-gray-700 mb-1 font-semibold">
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

        <div className="col-span-5">
          <label className="block text-md text-gray-700 mb-1 font-semibold">
            Name
          </label>
          <Input
            placeholder="Enter name"
            //    {...register("name")}
          />
        </div>

        <div className="col-span-5">
          <label className="block text-md text-gray-700 mb-1 font-semibold">
            ID
          </label>
          <Input
            placeholder="Enter ID"
            //   {...register("id")}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <label className="block text-md text-gray-700 mb-1 font-semibold">
            Code 1
          </label>
          <Select
          //   {...register("code1")}
          >
            <option value="">Select Code 1</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </Select>
        </div>

        <div className="col-span-2">
          <label className="block text-md text-gray-700 mb-1 font-semibold">
            Code 2
          </label>
          <Select
          //   {...register("code2")}
          >
            <option value="">Select Code 2</option>
            <option value="X">X</option>
            <option value="Y">Y</option>
          </Select>
        </div>

        <div className="col-span-4">
          <label className="block text-md text-gray-700 mb-1 font-semibold">
            Location
          </label>
          <Select
          //   {...register("location")}
          >
            <option value="">Search location</option>
            <option value="chennai">Chennai</option>
            <option value="bangalore">Bangalore</option>
          </Select>
        </div>

        <div className="col-span-4">
          <label className="block text-md text-gray-700 mb-1 font-semibold">
            Location Number
          </label>
          <Select
          //   {...register("locationNumber")}
          >
            <option value="">Search location number</option>
            <option value="001">001</option>
            <option value="002">002</option>
          </Select>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full flex items-end">
        <div className="w-[90%] text-gray-900">
          Tip: You must search name database before creating a{" "}
          <span className="font-bold">new supplier</span>
        </div>
        <div className="w-[10%] flex flex-col gap-3 mt-6">
          <Button
            type="button"
            variant="secondary"
            //   onClick={() => reset()}
            className="text-gray-800 border-none font-bold text-right"
          >
            Clear Fields
          </Button>

          <Button type="submit" variant="primary">
            Run Search
          </Button>
        </div>
      </div>
    </form>
  );
}
