import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote';
import mdxComponents from '../../helpers/mdxComponents';
import Head from 'next/head';
import { ChevronRight } from 'react-bootstrap-icons';

const Post = ({source, meta, slug}) => {
    const { title, description, date } = meta;

    return (
        <>
            <Head>
                <meta property="og:title" content={title + ' | yt-subscri.be'} />
                <meta property='og:type' content='article' />
                <meta property="og:url" content={'https://yt-subscri.be/blog/' + slug} />
                <meta property='og:description' content={description} />                
                <meta name="description" content={description} />
                <title>{title + ' | yt-subscri.be'}</title>
                <script type="application/ld+json">
                    {
                        JSON.stringify(
                            {
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "https:/yt-subscri.be/blog/" + slug 
                            },
                            "headline": "ewgweg",
                            "image": "",  
                            "author": {
                                "@type": "Person",
                                "name": "Jack Kingham"
                            },  
                            "publisher": {
                                "@type": "Organization",
                                "name": "yt-subscri.be",
                                "logo": {
                                "@type": "ImageObject",
                                "url": "https://yt-subscri.be/assets/svg/yt-subscribe-logo.svg"
                                }
                            },
                            "datePublished": date
                            }
                        )
                    }
                </script>
            </Head>
            <section className='flex justify-start items-center mb-4'>
                <a href="/blog" className='text-lg text-red-500 w-fit block underline'>Blog</a>
                <ChevronRight size={16} className='fill-gray-600 relative top-[2px] mx-1' />
                <p className="text-lg">{title}</p>
            </section>
            <hr className='w-full my-8' />
            <article className='prose prose-slate prose-h1:p-24 prose-h1:text-5xl min-w-full'>
                <MDXRemote { ...source } components={mdxComponents} />
            </article>
        </>
    );
}

export const getStaticPaths = () => {
    const paths = fs.readdirSync(path.join('src', 'posts')).map(filename => filename.split('.')[0]);

    return {
        paths: paths.map(filename => ({
            params: {slug: filename}
        })),
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params;

    const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', slug + '.mdx'), 'utf-8');
    
    const { data, content } = matter(markdownWithMeta);
    const source = await serialize(content);

    return {
        props: {
            source, 
            meta: data,
            slug,
        }
    }
}

export default Post;
