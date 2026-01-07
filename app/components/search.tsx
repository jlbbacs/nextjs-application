"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    
    // CHANGED THIS: DummyJSON and our Page expect "q"
    if (term) {
      params.set("q", term); 
    } else {
      params.delete("q");
    }
    
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mb-10 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F87B1B] focus:outline-none text-black"
        onChange={(e) => handleSearch(e.target.value)}
        // CHANGED THIS: Must match the key above
        defaultValue={searchParams.get("q")?.toString()} 
      />
    </div>
  );
}