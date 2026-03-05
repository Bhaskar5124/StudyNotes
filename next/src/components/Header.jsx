import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
      <div className='flex justify-evenly items-center m-4'>
        <Link href="/" className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">Home</Link>
        <Link href="/user" className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">Visit user</Link>
        <Link href="/about" className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">About Us</Link>
        <Link href="/news" className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">News</Link>
      </div>
    </div>
  )
}

export default Header