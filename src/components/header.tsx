import Link from 'next/link'

export default function Header() {
    return (
        <div className="bg-gradient-to-r from-slate-600 to-slate-500">
            <div className="max-w-5xl mx-auto flex flex-row gap-5 justify-center text-slate-200 font-bold">
               <Link
               href="/"
               >Home</Link>
               <Link
               href="/application"
               >Applications</Link>
               <Link
               href="/application/new"
               >Create Application</Link>
            </div>
            
        <div className="bg-gradient-to-l from-slate-600 to-slate-500 h-1"></div>
        </div>
    )
}