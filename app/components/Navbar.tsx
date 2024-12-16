"use client"

import {useState, useEffect} from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);


    return(
        <nav className= {`fixed z-20 ${isSticky ? 'bg-white shadow-md' : 'bg-transparent'} w-full`}>
            <div className='conatiner flex justify-between px-6 sm:px-10 py-3 mx-auto items-center'>
                <Link className='text-xl font-bold' href='/'>JP</Link>
                <div className='hidden sm:flex space-x-6'>
                    <Link className='hover:text-gray-600' href='#experience'>Experience</Link>
                    <Link className='hover:text-gray-600' href='#projects'>Project</Link>
                    <Link className='hover:text-gray-600' href='#achievement'>Achievement</Link>
                    <Link className='hover:text-gray-600' href='#skills'>Skill</Link>
                    <Link className='hover:text-gray-600' href='#skills'>Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;