"use client";

export default function vendorOnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="w-full flex justify-left flex-col">
        <h1 className="text-black text-3xl font-semibold mb-4">
          Supplier Management
        </h1>
        <h3 className="text-gray-600 mb-4 text-lg font-semibold">
          Input supplier details below to action
        </h3>
        <div className="min-w-full max-w-lg bg-[#F0F0F0] rounded-lg p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
