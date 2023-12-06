'use client'

import { useContext, useState } from "react"
import { AuthContext } from "./context/AuthContext"

export default function Home() {

  const { googleSignIn, googleSignOut, user, status } = useContext(AuthContext)

  return (
    <>
      <p className='text-red-500'>{status}</p>
      {user.displayName && status === "authenticated" && <h1 className='text-4xl'>hlo {user.displayName}</h1>}
      {status === "unauthenticated" &&
        <button onClick={googleSignIn} className='mt-10 p-3 bg-blue-600 rounded-md'>login</button>
      }
      {status === "authenticated" &&
        <button onClick={googleSignOut} className='mt-10 p-3 bg-blue-600 rounded-md'>logout</button>
      }
    </>
  )
}
