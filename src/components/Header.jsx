import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContextCard } from "../context/CartContext"
import { LikeContextCard } from "../context/LikeContext"

const Header = () => {
    const [showCategories, setShowCategories] = useState(false)
    const [search, setSearch] = useState("")
    const { cart } = useContext(CartContextCard);
    const { like } = useContext(LikeContextCard)

    return (
        <header className="w-full border-b border-b-gray-500 mb-3 fixed z-10">

            {/* 🔹 TOP BAR */}
            <div className="bg-[#1B6392] text-white text-sm border-b border-b-gray-500">
                <div className="container mx-auto px-5 flex justify-between py-2">
                    <p>Welcome to Clicon online eCommerce store.</p>

                    <div className="flex gap-4 items-center">
                     
                        <select className="text-white bg-[#1B6392]">
                            <option className="px-4 py-2">UZ</option>
                            <option className="px-4 py-2">RU</option>
                            <option className="px-4 py-2">EN</option>
                        </select>

                        <select className="text-white bg-[#1B6392]">
                            <option className="px-4 py-2">USD</option>
                            <option className="px-4 py-2">EUR</option>
                            <option className="px-4 py-2">UZS</option>
                        </select>


                    </div>
                </div>
            </div>

            {/* 🔹 MAIN BAR */}
            <div className="bg-[#1B6392]">
                <div className="container mx-auto px-5 py-4 flex items-center gap-6">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-blue-700">
                        <img src="./img/Logo (3).svg" alt="" />
                    </Link>

                    {/* Search */}
                    <div className="flex flex-1 border rounded overflow-hidden">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 px-4 py-2 outline-none bg-white"
                            placeholder="Search for anything..."
                        />
                        <button className="px-4 bg-white">
                            <img src="./img/search.svg" alt="" />
                        </button>
                    </div>

                    {/* Icons */}
                    <div className="flex gap-4 text-xl">
                        <Link to="/cart" className="relative"><img className="" src="./img/c.svg" alt="" /><span className="absolute right-[-10px] top-[-10px] text-sm right-5 rounded-2xl px-1.5 text-[#1B6392] bg-white">{cart.length}</span></Link>
                        <Link to="/like" className="relative"><img src="./img/h.svg" alt="" /><span className="absolute right-[-10px] top-[-10px] text-sm right-5 rounded-2xl px-1.5 text-[#1B6392] bg-white">{like.length}</span></Link>
                        <Link to="/filter"><img src="./img/u.svg" alt="" /></Link>
                    </div>
                </div>
            </div>

            {/* 🔹 CATEGORY BAR */}
            <div className="border-t bg-white">
                <div className="container mx-auto px-5 py-3 flex gap-6 items-center">

                    {/* Categories dropdown */}
                    <div className="relative">
                        <option
                            onClick={() => setShowCategories(!showCategories)}
                            className="bg-orange-500 text-white px-4 py-2 rounded"
                        >
                            All Category ⌄
                        </option>

                        {/* {showCategories && (
                            <div className="absolute top-full left-0 bg-white shadow w-48 z-10">
                                {.map((cat) => (
                                    <Link
                                        key={cat.id}
                                        to={`/category/${cat.id}`}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        {cat.title}
                                    </Link>
                                ))}
                            </div>
                        )} */}
                    </div>

                    {/* Static links */}
                    <Link className="text-gray-600 font-medium" to="/">Track Order</Link>
                    <Link className="text-gray-600 font-medium" to="/">Compare</Link>
                    <Link className="text-gray-600 font-medium" to="/">Customer Support</Link>
                    <Link className="text-gray-600 font-medium" to="/">Need Help</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
