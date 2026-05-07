import CreateEditHeader from "@/components/layout/CreateEditHeader";

export default function createVendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen bg-white">
      <CreateEditHeader />
      {children}
    </div>
  );
}
