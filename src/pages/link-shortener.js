import URLShortener from '@/components/URLShortener';
import React from 'react';
import Head from 'next/head';

const ShortenUrl = () => {
    return (
        <>
            <Head>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="YouTube Link Shortener | yt-subscri.be"/>
                <meta property="og:url" content="https://yt-subscri.be/link-shortener"/>
                <meta property="og:image" content="https://yt-subscri.be/assets/svg/shorten-link-tool.svg"/>
                <meta property="og:description" content="A free YouTube link shortener tool, to deliver cleaner video URLs that look good on any platform."/>
                <title>YouTube Link Shortener | yt-subscri.be</title>
                <meta name="description" content="A free YouTube link shortener tool, to deliver cleaner video URLs that look good on any platform." />
                <script type="application/ld+json">
                    { 
                        JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [{
                                "@type": "Question",
                                "name": "What is the YouTube Link Shortener For?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "The link shortener tool provides an easy way to shorten your YouTube Video Links into something more readable. The added benefit of this, is you can share a shorter URL on your social media, emails, blogs, and anywhere else."
                                }
                            },{
                                "@type": "Question",
                                "name": "Is the Shortened URL Safe?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, 100% Safe! Any shortened URL, that starts with https://youtu.be is safe. This is a domain registered by YouTube. The only place a link with a youtu.be domain can go to, is youtube.com. You can't use a youtu.be link to go to a website that isn't YouTube."
                                }
                            },{
                                "@type": "Question",
                                "name": "How do I get a YouTube link with timestamp?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "To get a YouTube link with timestamp, you can check the \"Start a video at a timestamp?\" box. Then simply enter the video timestamp you want to start the video at. Our tool will create a link that calculates the appropriate timestamp."
                                }
                            }]
                        })
                    }
                </script>
            </Head>
            <URLShortener />
            <section className='my-12 border-2 rounded-md p-4'>
                <h2 className="text-3xl font-bold mb-4 text-gray-600">What is the YouTube Link Shortener For?</h2>
                <p>The link shortener tool provides an easy way to shorten your YouTube Video Links into something more readable. The added benefit of this, is you can share a shorter URL on your social media, emails, blogs, and anywhere else.</p>
                <hr className="my-4" />
                <h2 className="text-3xl font-bold mb-4 text-gray-600">Is the Shortened URL Safe?</h2>
                <p>Yes, 100% Safe! Any shortened URL, that starts with <span className="italic">https://youtu.be</span> is safe. This is a domain <a href="https://blog.youtube/news-and-events/make-way-for-youtube-links/" className='underline text-red-500' target='_blank' rel="noreferrer noopener">registered by YouTube.</a> The only place a link with a <span className="italic">youtu.be</span> domain can go to, is youtube.com. You can't use a <span className="italic">youtu.be</span> link to go to a website that isn't YouTube.</p>
                <hr className="my-4" />
                <h2 className="text-3xl font-bold mb-4 text-gray-600">How does the YouTube Link Shortener work?</h2>
                <p>When you paste a YouTube video link in the box, this tool will replace <span className="italic">youtube.com</span> with <span className="italic">youtu.be</span>. This tool also allows you to add extra features to your URL, like a timestamp to start at.</p>
                <hr className="my-4" />
                <h2 className="text-3xl font-bold mb-4 text-gray-600">How do I get a YouTube link with timestamp?</h2>
                <p>To get a YouTube link with timestamp, you can check the "Start a video at a timestamp?" box. Then simply enter the video timestamp you want to start the video at. Our tool will create a link that calculates the appropriate timestamp.</p>
            </section>
        </>
    );
}

export default ShortenUrl;
