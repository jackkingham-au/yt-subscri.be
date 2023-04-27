import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import PlausibleProvider from 'next-plausible'

export default function App({ Component, pageProps }) {
    return <>
        <PlausibleProvider domain="yt-subscri.be">
            <Header />
            <main className='container mx-auto w-[90vw] lg:w-[80vw] max-w-[1000px] bg-white rounded-md p-4 md:p-12 shadow-2xl'>
                <Component {...pageProps} />
            </main>
            <Footer />
        </PlausibleProvider>
    </>   
}
