import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Bell, ShoppingBag, ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <div className='w-full flex items-center justify-between pb-4 border-b border-gray-300'>
        {/* {left} */}
        <Link href="/" className="flex items-center space-x-2">
            <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className='w-6 h-6 md:w-9 md:h-9' />
            <p className=" md:block text-lg font-semibold tracking-wide">Amy<span className=" font-bold text-red-600 text-2xl">Store</span></p>
        </Link>
        {/* {right} */}
        <div className="flex items-center space-x-4">
            <SearchBar />
            <Bell className=" text-gray-600" />
            <ShoppingCart className=" text-gray-600" />
            <Link href='/login' className="text-gray-600 font-normal">Sign in</Link>
        </div>

    </div>
  )
};

export default NavBar;