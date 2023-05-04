import fs from 'fs';
import path from "path";
import matter from 'gray-matter';
import Head from 'next/head';
import { ArrowRight, Calendar } from 'react-bootstrap-icons';
import { getMonthText } from '@/helpers/time';

const Blog = ({posts}) => {
    return (
        <>
            <Head>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Blog | yt-subscri.be"/>
                <meta property="og:url" content="https://yt-subscri.be/blog"/>
                <meta property="og:image" content="https://yt-subscri.be/assets/svg/yt-subscribe-logo.svg"/>
                <meta property="og:description" content="View our collection of YouTube tips, to increase your subscriber count, and get the most from your channel!"/>
                <title>Blog | yt-subscri.be</title>
                <meta name="description" content="View our collection of YouTube tips, to increase your subscriber count, and get the most from your channel!" />
            </Head>
            <header className='mb-12'>
                <h1 className="font-bold text-4xl mb-4">Blog</h1>
                <p>View our collection of YouTube tips, to increase your subscriber count, and get the most from your channel!</p>
            </header> 
            <hr className='my-8' />
            {
                posts.map(({meta, slug}, index) => { 
                    const [year, month, day] = meta.date.split('-');

                    return (
                        <>
                            <article key={index} className='border-2 min-w-full my-4 p-4 rounded-md hover:shadow-md transition-all'>
                                <div className="flex flex-col md:flex-row justify-between items-start">
                                    <div className="prose prose-slate">
                                        <h2>{meta.title}</h2>   
                                        <p>{meta.description}</p>
                                    </div>
                                    <section className='mt-8 md:mt-0'>
                                        <div className="flex items-center">
                                            <div className="relative flex">
                                                <Calendar size={32} />
                                                <h5 className="absolute top-1 bottom-0 right-0 left-0 text-lg font-semibold flex items-center justify-center">{day}</h5> 
                                            </div>
                                            <h6 className='p-2 whitespace-nowrap'>{getMonthText(month) + ' ' + year}</h6>
                                        </div>
                                        <div className='my-4'>
                                            <h5>Written By...</h5>
                                            <img src="/assets/svg/yt-subscribe-logo.svg" alt="yt-subscribe-logo" className="max-w-[120px] my-2" />
                                        </div>
                                    </section>
                                </div>
                                <hr className="my-6 w-full" />
                                <a href={'/blog/' + slug} className="w-fit no-underline text-blue-500 my-2 text-lg font-bold uppercase rounded-md flex items-center hover:underline mr-auto">Read More <ArrowRight size={32} className='ml-2' /></a>
                            </article>
                            <hr className='my-8' />
                        </>
                    )
                })
            }
        </>
    );
}

export default Blog;

export const getStaticProps = () => {
    const files = fs.readdirSync(path.join('src', 'posts'));

    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', filename));
        
        const { data } = matter(markdownWithMeta);

        return {
            meta: data,
            slug: filename.split('.')[0],
        }
    });

    return {
        props: {
            posts
        }
    }
}
