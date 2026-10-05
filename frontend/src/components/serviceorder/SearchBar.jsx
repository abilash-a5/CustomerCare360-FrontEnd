import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-5 flex items-center gap-4 border border-[#F3D9E5]">

      <Search className="text-gray-400" />

      <input
    type="text"
    placeholder="Search services, requests or providers..."
    className="w-full outline-none text-lg"
    />

    </div>
  );
}

export default SearchBar;