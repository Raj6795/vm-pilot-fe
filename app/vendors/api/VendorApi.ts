export async function searchVendorsApi() {
  const res = await fetch("/api/vendors/search");
  return res.json();
}

// Use this once api is ready
