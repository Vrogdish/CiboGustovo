import React, { ReactNode } from 'react'

interface props {
    children : ReactNode
    className? : string
}

export default function Navbar({children,className} : props) {
  return (
    <nav className={`${className} gap-10`}>
        <ul className='flex gap-10'>
        {children}
        </ul>
    </nav>
  )
}
