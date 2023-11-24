"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
    {
        title: 'About',
        path: '#about',
    },
    {
        title: 'Projects',
        path: '#projects',
    },
    {
        title: 'Contact',
        path: '#contact',
    },
];


const Navbar = () => {
    const closeNavbar = () => {
        setNavbarOpen(false);
    };
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed mx-auto border border-[#33353f] top-0 left-0 right-0 z-10 bg-[#151920] bg-opacity-100'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={'/'} className='text-2xl md:text-2xl text-white font-semibold'>
                    <Image src='/image/SHV.png' style={{ borderRadius: '10px' }} alt='' width={100} height={100} />
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <FontAwesomeIcon icon={faBars} fade className="h-5 w-5" />
                        </button>
                        ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <FontAwesomeIcon icon={faX} fade className="h-5 w-5" />
                        </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} onClick={closeNavbar} /> : null}
        </nav>
    );
};

export default Navbar;