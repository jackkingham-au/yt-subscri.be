import { getFields } from '@/helpers/forms';
import { shortenUrl } from '@/helpers/url';
import { copyText } from '@/helpers/copy';
import React, { useState } from 'react';

const URLShortener = () => {
    const [timestamp, setTimestamp] = useState(true);
    const [result, setResult] = useState(false);
    const [copied, setCopied] = useState(false)


    const submit = (e) => {
        e.preventDefault();

        setCopied(false);

        const fields = getFields(e.target);

        setResult(shortenUrl(fields));
    }
    
    const copyUrl = () => {
        const isCopied = copyText(result);

        setCopied(isCopied);
    }
    
    return (
        <>
            <section>
                <h1 className="font-bold text-4xl mb-4">YouTube Link Shortener</h1>
                <p>Use this tool to shorten your YouTube video links, so you can share them anywhere!</p>
            </section>
            <div className="p-4 rounded-md my-4 bg-slate-700 text-gray-300">
                <h4 className='text-lg'>❌ https://www.youtube.com/watch?v=jNQXAC9IVRw</h4>
                <h4 className='text-lg'>✔  youtu.be/jNQXAC9IVRw</h4>
            </div>
            <form onSubmit={e => submit(e)}>
                <div className="flex items-center my-8">
                    <h2 className='font-bold text-2xl whitespace-nowrap mr-4'><span className="mr-2 bg-red-500 text-white rounded-full w-12 h-12 inline-flex items-center justify-center">1</span> Paste the Video URL</h2>
                    <hr className='inline-flex w-full' />
                </div>
                <section className='m-4'>
                    <label htmlFor="video" className='text-lg font-medium mb-1 block'>What's the YouTube Video URL?</label>
                    <input type="url" required name="video" placeholder='https://www.youtube.com/watch?v=jNQXAC9IVRw' className='min-w-full border-2 rounded-md p-4' />
                    <p className="text-gray-400 mt-2 text-sm">A URL should include 'https://' OR 'http://'.</p>
                </section>
                <div className="flex items-center my-8">
                    <h2 className='font-bold text-2xl whitespace-nowrap mr-4'><span className="mr-2 bg-red-500 text-white rounded-full w-12 h-12 inline-flex items-center justify-center">2</span> Add a Timestamp</h2>
                    <hr className='inline-flex w-full' />
                </div>
                <section className='flex justify-start flex-col md:flex-row'>
                    <div className="flex items-center justify-start m-4 w-fit flex-wrap">
                        <div className="flex flex-nowrap items-center mb-2 md:mb-0">
                            <input type="checkbox" onChange={(e) => setTimestamp(!e.target.checked)} name="startAt" id="startAt" className='h-6 w-6 mr-4' />
                            <label htmlFor="startAt" className='text-lg font-medium mr-4'>Start the video at a timestamp?</label>
                        </div>
                        <input type="text" disabled={timestamp} name="startAtTime" className='p-2 rounded-md border-2 w-full md:w-16 disabled:bg-gray-300 disabled:cursor-not-allowed' required placeholder='0:29' pattern='^[0-9]{0,2}:{0,1}[0-9]{1,2}:{0,1}[0-9]{1,2}$' />
                    </div>
                    {/* <div className="flex items-center justify-start m-4 w-fit">
                        <input type="checkbox" name="loop" id="loop" className='h-6 w-6 mr-4' />
                        <label htmlFor="loop" className='text-lg font-medium mr-4'>Loop the video?</label>
                    </div> */}
                </section>
                <button type="submit" className='py-4 px-8 my-8 bg-violet-500 text-white outline-none text-lg font-bold uppercase rounded-md'>Shorten YouTube Link</button>
            </form>
            {
                (result) 
                ? <>
                     <div className="flex items-center my-8">
                        <h2 className='font-bold text-2xl whitespace-nowrap mr-4'><span className="mr-2 bg-red-500 text-white rounded-full w-12 h-12 inline-flex items-center justify-center">3</span> Copy Your Link</h2>
                        <hr className='inline-flex w-full' />
                    </div>
                    <section className="p-4 rounded-md m-4 bg-slate-700 text-gray-300 cursor-pointer">
                        <h4 className='text-xl my-2 text-green-400'>{result}</h4>
                    </section>   
                    <button onClick={() => copyUrl()} className="text-violet-500 font-bold uppercase outline-none text-lg mx-4">
                        {
                            (copied)
                            ? '✔ Link Copied'
                            : <>
                                <span className='text-3xl relative top-[3px] mr-2'>&rarr;</span>
                                Copy Link
                            </> 
                        }
                    </button>
                </>
                : ''
            }
        </>
    );
}

export default URLShortener;
