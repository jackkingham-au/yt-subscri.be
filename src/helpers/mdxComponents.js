import Image from 'next/image';

export default {
    h1: ({children}) => (
        <header className='bg-red-500 rounded-md block'>
            <h1 className='text-white'>{children}</h1>
        </header>
    ),
    img: (props) => (
        <img { ...props } width={300} style={{height: 'auto'}} className="rounded-md border-2 border-slate-800" />
    ),
    a: (props) => (
        <a { ...props } target="_blank" rel="noreferrer nooepner" className='underline text-red-500'>{props.children}</a>
    )

}