import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className='hidden sm:flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-md'>
        <Search className='text-gray-500' />
        <input type="text" placeholder="Search..." className='flex-1 outline-none ml-2' />
    </div>
  )
}

export default SearchBar