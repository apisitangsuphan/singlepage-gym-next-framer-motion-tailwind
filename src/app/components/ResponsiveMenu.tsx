import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// Mock data for the responsive menu items.
import { NavbarMenu } from "../mockData/data";
interface NavbarMenu {
  id: number;
  title: string;
  link: string;
}
interface ResponsiveProps {
  open: boolean;
}

function ResponsiveMenu({ open }: ResponsiveProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 w-full left-0 h-screen z-20"
        >
          <div className="text-xl font-semibold bg-primary text-white py-5 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-3">
              {NavbarMenu.map((item: NavbarMenu) => {
                return (
                  <li key={item.id}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default ResponsiveMenu;
