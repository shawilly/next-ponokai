"use client";
import ouch from "@/assets/ouch.svg";
import { motion, type MotionProps } from "framer-motion";
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
  const whileHover: MotionProps["whileHover"] = {
    scale: 1.2,
    rotate: 360,
    color: "",
  };
  const whileTap: MotionProps["whileTap"] = {
    scale: 0.8,
    rotate: -360,
    borderRadius: "100%",
  };

  return (
    <motion.div whileHover={whileHover} whileTap={whileTap}>
      <Link
        className={`flex max-w-xs flex-col gap-4 rounded-xl  ${className}`}
        href={href}
        target={target}
      >
        <Image src={src} alt={alt} />
      </Link>
    </motion.div>
  );
};

export default AdventureIcon;
