"use client";
import github from "@/assets/github.svg";
import { motion } from "framer-motion";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

const GithubButton = () => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link href="https://github.com/shawilly/ponokai" target="_blank">
        <Image src={github as StaticImport} alt="github" />
      </Link>
    </motion.button>
  );
};

export default GithubButton;
