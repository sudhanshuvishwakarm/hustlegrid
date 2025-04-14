'use client'
import Link from "next/link";
import { useState } from "react";
import { SignInButton, SignedIn, SignOutButton, UserButton, SignedOut } from "@clerk/nextjs";
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-[100%]">
            <nav className="container mx-auto flex items-center justify-between px-4  sm:px-8 md:px-16 lg:px-30 py-6">
                <div className="text-xl  font-bold text-blue-600">
                    <a href="/"><img src="/logo.png" className="h-8" alt="logo error" /></a>
                </div>

                {/* Hamburger for mobile */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu items */}
                <ul className={`md:flex md:items-center space-y-2 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0 transition-all duration-300 ease-in ${menuOpen ? 'block' : 'hidden'}`}>
                    <SignedIn>
                        <Link href="/create" className="text-gray-700 hover:text-blue-600 block py-2 md:py-0">create</Link>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>

                </ul>
            </nav>

        </header>
    );
};

export default Header;
