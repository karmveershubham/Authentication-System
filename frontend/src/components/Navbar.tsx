'use client';
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Loading from './Loading';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [isAuth, setIsAuth] = useState<string | null>(null)
  useEffect(() => {
    const authCookie=Cookies.get('is_auth')
    setIsAuth(authCookie || null)

  })
  return (
    <>
     {/* {isAuth===null && <Loading/>} */}
     <nav className="bg-purple-800 p-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-white mr-4">Home</Link>
            {isAuth ?
              (
                <Link href="/user/profile" className="text-white mr-4">Profile</Link>
              ) :
              (
                <>
                  <Link href="/account/login" className="text-white mr-4">Login</Link>
                  <Link href="/account/register" className="text-white mr-4">Registration</Link>
                </>
              )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar