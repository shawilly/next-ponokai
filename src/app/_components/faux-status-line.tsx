"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface StatusLineProps {
  whereami?: string;
}

const StatusLine = ({ whereami = "page.tsx" }: StatusLineProps) => {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-bg3"
    >
      <Link
        className="font-jetbrains flex items-center justify-between bg-bg3/95 px-4 py-2 text-xs backdrop-blur-sm transition-colors hover:bg-bg4/95"
        href="https://github.com/shawilly/ponokai"
        target="_blank"
      >
        {/* Left section */}
        <div className="flex items-center gap-4">
          <span className="rounded bg-pblue/20 px-2 py-0.5 font-semibold text-pblue">
            NORMAL
          </span>
          <span className="hidden items-center gap-2 text-pgrey md:flex">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            {whereami}
          </span>
        </div>

        {/* Center section */}
        <div className="flex items-center gap-2">
          <span className="text-pgreen">shawilly</span>
          <span className="text-grey_dim">/</span>
          <span className="text-fg">ponokai</span>
          <svg
            className="ml-1 h-3 w-3 text-grey_dim"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </div>

        {/* Right section */}
        <div className="hidden items-center gap-4 md:flex">
          <span className="text-ppurple">TypeScript</span>
          <span className="text-porange">Ln 42, Col 7</span>
          <span className="text-pblue">UTF-8</span>
        </div>
      </Link>
    </motion.footer>
  );
};

export default StatusLine;
