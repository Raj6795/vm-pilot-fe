"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Pagination from "../../../components/table/Pagination";
import Table from "../../../components/table/Table";
import SearchResultsHeader from "./SearchResultsHeader";

type Column = {
  label: string; // UI text (can contain #)
  accessor?: string; // safe key
  isAction?: boolean; // For columns that contain buttons or actions
};

export default function SearchResultsComponent() {
  const [page, setPage] = useState(1);

  const pageSize = 5;

  const router = useRouter();

  // Sample data (replace with API data)
  const allData = [
    {
      name: "John",
      "BBA#": 1234,
      "#SAP": 9876,
      "#AP": 4321,
      cmpy: "ABC Corp",
      currency: "USD",
    },
    {
      name: "Raj",
      "BBA#": 5678,
      "#SAP": 5678,
      "#AP": 1234,
      cmpy: "XYZ Inc",
      currency: "EUR",
    },
    {
      name: "Sara",
      "BBA#": 9012,
      "#SAP": 9012,
      "#AP": 5678,
      cmpy: "123 Ltd",
      currency: "GBP",
    },
    {
      name: "John",
      "BBA#": 1234,
      "#SAP": 1234,
      "#AP": 5678,
      cmpy: "ABC Corp",
      currency: "USD",
    },
    {
      name: "Raj",
      "BBA#": 5678,
      "#SAP": 5678,
      "#AP": 1234,
      cmpy: "XYZ Inc",
      currency: "EUR",
    },
    {
      name: "Sara",
      "BBA#": 9012,
      "#SAP": 9012,
      "#AP": 5678,
      cmpy: "123 Ltd",
      currency: "GBP",
    },
    {
      name: "John",
      "BBA#": 1234,
      "#SAP": 1234,
      "#AP": 5678,
      cmpy: "ABC Corp",
      currency: "USD",
    },
    {
      name: "Raj",
      "BBA#": 5678,
      "#SAP": 5678,
      "#AP": 1234,
      cmpy: "XYZ Inc",
      currency: "EUR",
    },
    {
      name: "Sara",
      "BBA#": 9012,
      "#SAP": 9012,
      "#AP": 5678,
      cmpy: "123 Ltd",
      currency: "GBP",
    },
    {
      name: "John",
      "BBA#": 1234,
      "#SAP": 1234,
      "#AP": 5678,
      cmpy: "ABC Corp",
      currency: "USD",
    },
    {
      name: "Raj",
      "BBA#": 5678,
      "#SAP": 5678,
      "#AP": 1234,
      cmpy: "XYZ Inc",
      currency: "EUR",
    },
    {
      name: "Sara",
      "BBA#": 9012,
      "#SAP": 9012,
      "#AP": 5678,
      cmpy: "123 Ltd",
      currency: "GBP",
    },
    {
      name: "Sara",
      "BBA#": 9012,
      "#SAP": 9012,
      "#AP": 5678,
      cmpy: "123 Ltd",
      currency: "GBP",
    },
    {
      name: "John",
      "BBA#": 1234,
      "#SAP": 1234,
      "#AP": 5678,
      cmpy: "ABC Corp",
      currency: "USD",
    },
    {
      name: "Raj",
      "BBA#": 5678,
      "#SAP": 5678,
      "#AP": 1234,
      cmpy: "XYZ Inc",
      currency: "EUR",
    },
    {
      name: "Raj",
      "BBA#": 5678,
      "#SAP": 5678,
      "#AP": 1234,
      cmpy: "XYZ Inc",
      currency: "EUR",
    },
    {
      name: "Sara",
      "BBA#": 9012,
      "#SAP": 9012,
      "#AP": 5678,
      cmpy: "123 Ltd",
      currency: "GBP",
    },
    {
      name: "John",
      "BBA#": 1234,
      "#SAP": 1234,
      "#AP": 5678,
      cmpy: "ABC Corp",
      currency: "USD",
    },
    {
      name: "John",
      "BBA#": 1234,
      "#SAP": 1234,
      "#AP": 5678,
      cmpy: "ABC Corp",
      currency: "USD",
    },
    {
      name: "Raj",
      "BBA#": 5678,
      "#SAP": 5678,
      "#AP": 1234,
      cmpy: "XYZ Inc",
      currency: "EUR",
    },
    {
      name: "Sara",
      "BBA#": 9012,
      "#SAP": 9012,
      "#AP": 5678,
      cmpy: "123 Ltd",
      currency: "GBP",
    },
    {
      name: "John",
      "BBA#": 1234,
      "#SAP": 1234,
      "#AP": 5678,
      cmpy: "ABC Corp",
      currency: "USD",
    },
    {
      name: "Raj",
      "BBA#": 5678,
      "#SAP": 5678,
      "#AP": 1234,
      cmpy: "XYZ Inc",
      currency: "EUR",
    },
    {
      name: "Sara",
      "BBA#": 9012,
      "#SAP": 9012,
      "#AP": 5678,
      cmpy: "123 Ltd",
      currency: "GBP",
    },
    {
      name: "John",
      "BBA#": 1234,
      "#SAP": 1234,
      "#AP": 5678,
      cmpy: "ABC Corp",
      currency: "USD",
    },
    {
      name: "Raj",
      "BBA#": 5678,
      "#SAP": 5678,
      "#AP": 1234,
      cmpy: "XYZ Inc",
      currency: "EUR",
    },
    {
      name: "Sara",
      "BBA#": 9012,
      "#SAP": 9012,
      "#AP": 5678,
      cmpy: "123 Ltd",
      currency: "GBP",
    },
    {
      name: "John",
      "BBA#": 1234,
      "#SAP": 1234,
      "#AP": 5678,
      cmpy: "ABC Corp",
      currency: "USD",
    },
    {
      name: "Raj",
      "BBA#": 5678,
      "#SAP": 5678,
      "#AP": 1234,
      cmpy: "XYZ Inc",
      currency: "EUR",
    },
    {
      name: "Sara",
      "BBA#": 9012,
      "#SAP": 9012,
      "#AP": 5678,
      cmpy: "123 Ltd",
      currency: "GBP",
    },
    // add 20+ items to test pagination
  ];

  const normalizedData = allData.map((row) => ({
    name: row.name,
    bba: row["BBA#"],
    sap: row["#SAP"],
    ap: row["#AP"],
    cmpy: row.cmpy,
    currency: row.currency,
    addBtn: () => (
      <button className="text-blue-500 hover:underline">Add</button>
    ),
    addSfxBtn: () => (
      <button
        onClick={() => router.push("create")}
        className="text-green-500 hover:underline"
      >
        Add Suffix
      </button>
    ),
    viewBtn: () => (
      <button className="text-purple-500 hover:underline">View</button>
    ),
  }));

  const columnConfig: Column[] = [
    { label: "Name", accessor: "name" },
    { label: "BBA#", accessor: "bba" },
    { label: "SAP#", accessor: "sap" },
    { label: "AP#", accessor: "ap" },
    { label: "CMPY", accessor: "cmpy" },
    { label: "Currency", accessor: "currency" },
    { label: "", isAction: true },
  ];

  const totalPages = Math.ceil(normalizedData.length / pageSize);

  const paginatedData = normalizedData.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  return (
    <div className="w-full bg-[#F1F1F1] h-[72vh] shadow-[0_10px_30px_rgba(0,0,0,0.3)] absolute top-[50vh] left-0 p-6 overflow-y-auto">
      <SearchResultsHeader />
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />

      <Table columns={columnConfig} data={paginatedData} />
    </div>
  );
}
