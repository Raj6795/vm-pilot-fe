"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function VerifyMFA() {
  const router = useRouter();
  const [pin, setPin] = useState("");

  useEffect(() => {
    if (!sessionStorage.getItem("step1")) {
      router.push("/login");
    }
  }, []);

  const handleVerify = () => {
    if (pin === "0000") {
      sessionStorage.setItem("authenticated", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid PIN. Please try again.");
    }
  };

  return (
    <div>
      <h1>Verify MFA</h1>
      <input placeholder="Enter PIN" onChange={(e) => setPin(e.target.value)} />
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
}
