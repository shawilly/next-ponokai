"use client";
import ouch from "@/assets/ouch.svg";
import { motion } from "framer-motion";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface AdventureIconProps {
  className?: string;
  target?: string;
  href: string;
  src: StaticImport;
  alt: string;
}

const AdventureIcon = (
  { href, src, alt, className, target }: AdventureIconProps = {
    href: "",
    src: ouch as StaticImport,
    alt: "",
    target: "_blank",
  },
) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.5 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
        restDelta: 0.001,
      }}
      className={className}
    >
      <Link href={href} target={target}>
        <Image src={src} alt={alt} />
      </Link>
    </motion.div>
  );
};

export default AdventureIcon;
