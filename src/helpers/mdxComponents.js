import Image from 'next/image';

export default {
    h1: ({children}) => (
        <header className='bg-red-500 w-full'>
            <h1 className='text-white p-8'>{children}</h1>
        </header>
    ),
    img: (props) => (
        <Image { ...props } width={300} height={300} className="rounded-md" />
    )
}