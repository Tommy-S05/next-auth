// 'use client'
import Link from "next/link";
import CheckUser from "@/app/components/CheckUser";

export default function AppBar() {
    
    return (
        <div className={'bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-2'}>
            <Link href={'/'} className={'text-sky-600 hover:text-sky-700'}>
                Home
            </Link>
            <Link href={'/admin'} className={'text-sky-600 hover:text-sky-700'}>
                Admin
            </Link>
            <Link href={'/admin/panel'} className={'text-sky-600 hover:text-sky-700'}>
                Panel
            </Link>
            <CheckUser/>
        </div>
    )
}