import React from 'react';

const Header = () => {
    return (
        <header className='bg-red-500 flex flex-col p-4 mb-12 md:flex-row items-center justify-between shadow-xl border-b-[0.5px] border-b-gray-600'>
            <a href="/" className='block my-4'>
                <h1 className="text-center text-2xl font-bold text-white">yt-subscri.be</h1>
            </a>
            <nav className="text-white flex items-center justify-center flex-wrap">
                <a href="/link-shortener" className='hover:underline block text-md my-2 mx-4 font-regular'>YouTube Link Shortener</a>
                <a href="/subscribe-link" className='hover:underline block text-md my-2 mx-4 font-regular'>YouTube Subscribe Link</a>
            </nav>
        </header>
    );
}

export default Header;
