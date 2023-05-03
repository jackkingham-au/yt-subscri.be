import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { usePlausible } from 'next-plausible';

const Home = () => {
    const plausible = usePlausible();

    return (
        <>
            <Head>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="FREE YouTube Link Tools | yt-subscri.be"/>
                <meta property="og:url" content="https://yt-subscri.be"/>
                <meta property="og:image" content="https://yt-subscri.be/assets/svg/subscribe-link-tool.svg"/>
                <meta property="og:description" content="Free YouTube link tools, to grow and promote your YouTube channel on any platform."/>
                <title>FREE YouTube Link Tools | yt-subscri.be</title>
                <meta name="description" content="Free YouTube link tools, to grow and promote your YouTube channel on any platform." />
            </Head>
            <section className='my-8'>
                <h1 className='text-5xl font-bold my-4 text-center'>
                    Get More Subscribers.<br/>
                    <span className="text-blue-500">Using Better Links.</span>
                </h1>
                <h6 className="text-2xl text-center my-4">Link tools to help grow your YouTube Channel on social media, and beyond.</h6>
            </section>
            <h2 className="font-bold text-3xl text-center text-gray-600">FREE TOOLS</h2>
            <hr className="my-4" />
            <section className='flex items-center justify-around flex-col lg:flex-row'>
                <div className="lg:h-[320px] text-center border-2 p-4 rounded-md m-4 w-full lg:w-[50%]">
                    <Image src="/assets/svg/subscribe-link-tool.svg" alt="Subscribe Link Tool" width={200} height={200} className='mx-auto' />
                    <hr className="w-full my-2" />
                    <h3 className='text-xl font-medium my-4'>YouTube Subscribe Link Tool</h3>
                    <p>Use the Subscribe Link tool to create an automatic subscribe link for your YouTube Channel.</p>
                    <a onClick={() => plausible('[CLICK] - Subscribe Tool')} href="/subscribe-link" className="text-blue-500 p-4 block my-2 text-lg font-bold uppercase hover:bg-gray-200 rounded-md">View Tool</a>
                </div>
                <div className="lg:h-[320px] text-center border-2 p-4 rounded-md m-4 w-full lg:w-[50%]">
                    <Image src="/assets/svg/shorten-link-tool.svg" alt="Shorten Link Tool" width={200} height={200} className='mx-auto h-[90px] scale-150' />
                    <hr className="w-full my-2" />
                    <h3 className='text-xl font-medium my-4'>YouTube Link Shortener Tool</h3>
                    <p>Use the Link Shortener tool to reduce the length of your YouTube Video URL.</p>
                    <a onClick={() => plausible('[CLICK] - Shorten Tool')} href="/link-shortener" className="text-blue-500 p-4 block my-2 text-lg font-bold uppercase hover:bg-gray-200 rounded-md">View Tool</a>
                </div>
            </section>
            <hr className="my-4" />
        </>
    );
}

export default Home;
