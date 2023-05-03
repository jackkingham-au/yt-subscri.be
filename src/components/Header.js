import React from 'react';

const Header = () => {
    return (
        <header className='flex flex-col p-4 mb-12 md:flex-row items-center justify-between shadow-xl border-b-[0.5px] border-b-gray-600'>
            <a href="/" className='block my-4'>
                <img src="/assets/svg/yt-subscribe-logo.svg" alt="yt-subscribe-logo" className='max-w-[200px]' />
            </a>
            <nav className="flex items-center justify-center flex-wrap">
                <a href="/link-shortener" className='hover:underline block text-md my-2 mx-4 font-regular'>YouTube Link Shortener</a>
                <a href="/subscribe-link" className='hover:underline block text-md my-2 mx-4 font-regular'>YouTube Subscribe Link</a>
                <a href="/blog" className='hover:underline block text-md my-2 mx-4 font-regular'>Blog</a>
            </nav>
    </header>
    );
}

export default Header;
