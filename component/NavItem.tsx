import React from 'react'
export default function NavItem({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className={`block px-3 py-2 rounded-md bg-sky-500 text-white`}
      >
        {children}
      </a>
    </li>
  )
}
