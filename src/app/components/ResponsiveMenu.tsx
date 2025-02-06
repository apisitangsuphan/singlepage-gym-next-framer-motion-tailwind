import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
            className='fixed top-20 left-0 w-full h-screen z-20'
          >
            <div className="text-xl font-semibold bg-primary text-white py-5 my-6 rounded-3xl">
                <ul className="flex flex-col justify-center items-center gap-3">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            </div>
            
          </motion.nav>
        )}
    </AnimatePresence>
  )
}

export default ResponsiveMenu