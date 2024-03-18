import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BackButton() {
  return (
    <div className='flex items-center space-x-2'>
        <Link href="/" className="">
          <div className="flex items-center space-x-2">
            <Image src="/assets/arrow-left.png" alt="logo" width={15} height={15} />
            <span>Back to Blog Posts</span>
          </div>
        </Link>
    </div>
  )
}
