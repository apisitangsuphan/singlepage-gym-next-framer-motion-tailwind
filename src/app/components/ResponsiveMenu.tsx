import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
interface ResponsiveProps {
    open: boolean
}

function ResponsiveMenu({ open }: ResponsiveProps) {
  return (
    <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -100}}
            animate={{ opacity: 1,y:0}}
            exit={{ opacity: 0, y:-100}}
            transition={{  duration: 0.3 }}
            className='fixed top-20 w-full h-screen z-20'
          >
            <div className="text-xl font-semibold bg-primary text-white py-5 my-6 rounded-3xl">
                <ul className="flex flex-col justify-center items-center gap-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
            </div>
            
          </motion.nav>
        )}
    </AnimatePresence>
  )
}

export default ResponsiveMenu