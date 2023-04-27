import URLSubscribe from '@/components/URLSubscribe';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const SubscribeLink = () => {
    return (
        <>
            <Head>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="YouTube Subscribe Link | yt-subscri.be"/>
                <meta property="og:url" content="https://yt-subscri.be"/>
                <meta property="og:image" content="https://yt-subscri.be/assets/svg/subscribe-link-tool.svg"/>
                <meta property="og:description" content="A free YouTube subscribe link tool, to give you a link that auto-subscribes users that click it."/>
                <title>YouTube Subscribe Link | yt-subscri.be</title>
                <meta name="description" content="A free YouTube subscribe link tool, to give you a link that auto-subscribes users that click it." />
                <script type="application/ld+json">
                    {
                        JSON.stringify({
                            "@context": "https://schema.org/", 
                            "@type": "HowTo", 
                            "name": "How does a YouTube Subscribe Link Work?",
                            "description": "The subscribe link tool gives you a unique link you can use, that when clicked, directs someone to subscribe to your channel. The benefit of this link, is you can put it in your social media posts, blogs, emails and anywhere else, to add an easy subscribe link to your content. Think of it like a subscribe button.",
                            "totalTime": "PT1M",
                            "step": [{
                                "@type": "HowToStep",
                                "text": "Someone clicks your Subscribe Link. This directs them to your YouTube Channel landing page.",
                                "image": "https://yt-subscri.be/assets/svg/click-a-link.svg",
                                "name": "Someone clicks your Subscribe Link.",
                                "url": "https://yt-subscri.be/subscribe-link"
                            },{
                                "@type": "HowToStep",
                                "text": "A prompt will appear when the page is fully loaded. This will ask the person if they want to subscribe to the channel. They click 'Subscribe' to confirm.",
                                "image": "https://yt-subscri.be/assets/svg/confirm-subscription-prompt.svg",
                                "name": "Confirm Subscription",
                                "url": "https://yt-subscri.be/subscribe-link"
                            },{
                                "@type": "HowToStep",
                                "text": "After a person confirms the subscription, the person becomes subscribed to the channel. The account subscribed, is whichever Google Account is logged in at the time, in the browser.",
                                "image": "https://yt-subscri.be/assets/svg/subscribe-button-clicked.svg",
                                "name": "Person is Subscribed",
                                "url": "https://yt-subscri.be/subscribe-link"
                            }]
                        })
                    }
            </script>
            </Head>
            <URLSubscribe />
            <section className='my-12 border-2 rounded-md p-4'>
                <h2 className="text-3xl font-bold mb-4 text-gray-600">What is the YouTube Subscribe Link For?</h2>
                <p>The subscribe link tool gives you a unique link you can use, that when clicked, directs someone to subscribe to your channel. The benefit of this link, is you can put it in your social media posts, blogs, emails and anywhere else, to add an easy subscribe link to your content. Think of it like a subscribe button.</p>
                <hr className="my-4" />
                <h2 className="text-3xl font-bold mb-4 text-gray-600">How does the YouTube Subscribe Link Work?</h2>
                <p>From the channel URL you provide, we find the unique ID for your channel, and return a unique URL, with your channel ID, and the code <span className="italic">?sub_confirmation=1</span>. This code tells YouTube to open a Subscribe Confirmation Prompt (pictured below).</p>
                <figure className='my-8'>
                    <Image src="/assets/images/youtube-subscribe-confirmation.png" alt="YouTube Subscribe Confirm" height={200} width={300} className='my-4 block' />
                    <figcaption className='italic text-sm text-gray-600'>The confirm subscription box (when someone clicks your subscribe link).</figcaption>
                </figure>
                <p>People who click the subscribe link, can simply confirm their subscription, and be subscribed.</p>
                <hr className="my-4" />
                <h2 className="text-3xl font-bold mb-4 text-gray-600" id="testLink">How can I test this works?</h2>
                <p>There may be cases where this link will not work. To test this link, you can open an <a href="https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop" target='_blank' className='text-red-500 underline' rel="noopener noreferrer">"Incogntio Mode" browser</a>. Follow the link in the browser, and you should see a confirmation link when the page is fully loaded.</p>
            </section>  
        </>
    );
}

export default SubscribeLink;
