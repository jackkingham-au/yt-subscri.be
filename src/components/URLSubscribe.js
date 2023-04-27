import { getFields } from '@/helpers/forms';
import { copyText } from '@/helpers/copy';
import React, { useState } from 'react';
import { getSubscribeLink } from '@/helpers/url';
import Image from 'next/image';

const URLSubscribe = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(false);
    const [copied, setCopied] = useState(false)
    const [error, setError] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        setError(false);
        setCopied(false);
        setLoading(true);

        const fields = getFields(e.target);

        getSubscribeLink(fields.channel).then(url => {
            if(url) {
                setResult(url)
            } else {
                setError(true);
            }

            setLoading(false);
        }).catch(error => {
            setError(true);
            setLoading(false);
        })
    }
    
    const copyUrl = () => {
        const isCopied = copyText(result);

        setCopied(isCopied);
    }
    
    return (
        <>
            <section>
                <h1 className="font-bold text-4xl mb-4">YouTube Subscribe Link</h1>
                <p>Use this tool to generate an auto-subscribe link. This link, when clicked, will direct someone to subscribe to your channel.</p>
            </section>
            <section className='my-8 border-2 py-4 rounded-md'>
                <h2 className="text-2xl font-bold text-center">❓ How does a YouTube Subscribe Link Work?</h2>
                <div className="flex flex-col items-center justify-around md:flex-row md:items-end">
                    <div>
                        <Image src="/assets/svg/click-a-link.svg" alt="Click a link" width={250} height={200} className='hover:scale-125 transition-all duration-300 my-8' />
                        <p className="text-lg text-center">You click the link.</p>
                    </div>
                    <div>
                        <Image src="/assets/svg/confirm-subscription-prompt.svg" alt="Confirm subscription prompt" width={250} height={200} className='hover:scale-125 transition-all duration-300 my-8' />
                        <p className="text-lg text-center">Click Subscribe to confirm.</p>
                    </div>
                    <div>
                        <Image src="/assets/svg/subscribe-button-clicked.svg" alt="Subscribe button clicked" width={250} height={200} className='hover:scale-125 transition-all duration-300 my-8' />
                        <p className="text-lg text-center">Viewer is now subscribed.</p>
                    </div>
                </div>
            </section>
            <form onSubmit={e => submit(e)}>
                <div className="flex items-center mb-8 mt-12">
                    <h2 className='font-bold text-2xl whitespace-nowrap mr-4'><span className="mr-2 bg-red-500 text-white rounded-full w-12 h-12 inline-flex items-center justify-center">1</span> Paste Your Channel URL</h2>
                    <hr className='inline-flex w-full' />
                </div>
                <label htmlFor="channel" className='text-lg font-medium mb-1 block'>What's the YouTube Channel URL?</label>
                <input type="url" required name="channel" placeholder='https://www.youtube.com/@youtubecreators' className='min-w-full border-2 rounded-md p-4' />
                <p className="text-gray-400 mt-2 text-sm">A URL should include 'https://' OR 'http://'.</p>
                <button disabled={loading} type="submit" className='disabled:bg-gray-400 py-4 px-8 my-8 bg-violet-500 text-white outline-none text-lg font-bold uppercase rounded-md'>
                    {
                        (loading)
                        ? 'Fetching url...'
                        : 'Get Subscribe Link'
                    }
                </button>
            </form>
            {
                (error) 
                ? <>
                    <h5 className="bg-red-400 font-medium my-8 p-4 rounded-md text-white">🚫 There was an error converting the URL given. Check the URL is a YouTube Channel URL.</h5>
                </>
                : ''
            }
            {
                (result) 
                ? <>
                     <div className="flex items-center my-8">
                        <h2 className='font-bold text-2xl whitespace-nowrap mr-4'><span className="mr-2 bg-red-500 text-white rounded-full w-12 h-12 inline-flex items-center justify-center">2</span> Copy Your Link</h2>
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
                    <a href={'https://' + result} target="_blank" rel="noopener noreferrer" className="text-violet-500 font-bold uppercase outline-none text-lg mx-4 inline-block">
                        View Link
                    </a>
                    <p className="text-gray-400 m-4 text-sm">🧪 You should <a href="/subscribe-link#testLink" className='text-gray-500 underline'>test the link</a> in "Incognito Mode" in your browser.</p>
                </>
                : ''
            }
        </>
    );
}

export default URLSubscribe;
