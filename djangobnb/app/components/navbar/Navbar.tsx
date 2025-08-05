'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SearchFilters from './SearchFilters'
import UserNav from './UserNav'
import AddPropertyButton from './AddPropertyButton'
import { Menu, X } from 'lucide-react' // for icons (make sure to install lucide-react)

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="w-full fixed top-0 left-0 py-4 border-b bg-white text-black z-50 shadow-sm">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={130} height={30} className="inline-block" />
                    </Link>

                    {/* Hamburger menu (mobile only) */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} aria-label="Toggle menu">
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex flex-1 justify-between items-center ml-6">
                        <div className="flex-1">
                            <SearchFilters />
                        </div>
                        <div className="flex space-x-4 items-center">
                            <AddPropertyButton />
                            <UserNav />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu (dropdown) */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 space-y-4">
                        <div>
                            <SearchFilters />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <AddPropertyButton />
                            <UserNav />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
