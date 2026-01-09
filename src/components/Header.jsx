import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContextCard } from "../context/CartContext"
import { LikeContextCard } from "../context/LikeContext"
import { LanguageContext } from '../context/ChangeLanguage'

const Header = () => {
    const [showCategories, setShowCategories] = useState(false)
    const [search, setSearch] = useState("")
    const { cart } = useContext(CartContextCard);
    const { like } = useContext(LikeContextCard);
    const { lang, setLang, lan } = useContext(LanguageContext)

    return (
        <header className="w-full border-b border-b-gray-500 mb-3 fixed z-10">

            {/* 🔹 TOP BAR */}
            <div className="bg-[#1B6392] text-white text-sm border-b border-b-gray-500">
                <div className="container mx-auto px-5 flex justify-between py-2">
                    <p> {lan.title} </p>

                    <div className="flex gap-4 items-center">
                     
                        <select
                            value={lang}
                            onChange={(e) => setLang(e.target.value)}
                            className="text-white bg-[#1B6392] outline-none"
                        >
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                            <option value="eng">EN</option>
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
                <div className="container mx-auto px-6 py-4 flex items-center gap-6">
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
                            placeholder={lan.lang}
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
                        <button
                            onClick={() => setShowCategories(!showCategories)}
                            className="bg-orange-500 text-white px-4 py-2 rounded"
                        >{lan.menu_all}⌄</button>

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
                    <Link className="text-gray-600 font-medium" to="/">{lan.menu_track} </Link>
                    <Link className="text-gray-600 font-medium" to="/">{lan.menu_compare} </Link>
                    <Link className="text-gray-600 font-medium" to="/">{lan.menu_support} </Link>
                    <Link className="text-gray-600 font-medium" to="/">{lan.menu_help} </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
