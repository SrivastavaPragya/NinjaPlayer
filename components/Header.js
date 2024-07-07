import React from 'react'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"

const USER_IMAGE = 'https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg'

const Header = () => {
  const { data: session } = useSession()
  console.log("Session", session);

  return (
    <>
      <div className='flex justify-between p-3 border-b-[2px] border-[#FF3366]'>
        <img src="./Images/logo.png"
          width={120}
          alt='ninja player logo'
          className='cursor-pointer'
        />
        <div className='flex gap-4'>
          <button className='bg-black p-1 px-3 text-white rounded-full text-[12px]'>CREATE POST</button>
          {session ? (
            <button className='bg-white text-gray-500 p-1 px-3 text-[12px] border-[1px] rounded-full' onClick={() => signOut()}>SIGN OUT</button>
          ) : (
            <button className='bg-white text-gray-500 p-1 px-3 text-[12px] border-[1px] rounded-full' onClick={() => signIn()}>SIGN IN</button>
          )}
          <Image className='rounded-full cursor-pointer' src={ session?session?.user?.image:USER_IMAGE} alt='user image' width={40} height={40} />
        </div>
      </div>
    </>
  )
}

export default Header
