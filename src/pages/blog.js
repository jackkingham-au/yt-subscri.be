import fs from 'fs';
import path from "path";
import matter from 'gray-matter';
import Head from 'next/head';

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
            {
                posts.map(({meta, slug}, index) => (
                        <article key={index} className='bg-slate-100 border-2 min-w-full my-4 p-4 rounded-md prose prose-slate'>
                            <h2>{meta.title}</h2> 
                            <p>{meta.description}</p>
                            <a href={'/blog/' + slug} className="w-fit no-underline text-blue-500 p-4 block my-2 text-lg font-bold uppercase hover:bg-gray-200 rounded-md">View Post</a>
                        </article>
                ))
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
