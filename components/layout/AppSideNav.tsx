"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const NAV_ITEMS = [
  { label: "Search Vendors", route: "/vendors/search" },
  { label: "Create Vendor", route: "/vendors/create" },
];

export default function AppSideNav() {
  const isOpen = useSelector((state: RootState) => state.ui.isSideNavOpen);

  return (
    <nav className={`side-nav ${isOpen ? "open" : "closed"}`}>
      <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.route}>
            <Link href={item.route}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
``;
