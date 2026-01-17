"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const colors = [
  { name: "Red", variable: "pred", hex: "#ff8c9a", usage: "Errors, warnings, keywords" },
  { name: "Orange", variable: "porange", hex: "#f3bb9a", usage: "Constants, numbers" },
  { name: "Yellow", variable: "pyellow", hex: "#f8e7b0", usage: "Classes, types" },
  { name: "Green", variable: "pgreen", hex: "#b4e49a", usage: "Strings, success states" },
  { name: "Blue", variable: "pblue", hex: "#98d4e7", usage: "Functions, methods" },
  { name: "Purple", variable: "ppurple", hex: "#bdb2ff", usage: "Variables, special" },
];

const backgrounds = [
  { name: "Black", variable: "black", hex: "#181a1c" },
  { name: "BG Dim", variable: "bg_dim", hex: "#252630" },
  { name: "BG 0", variable: "bg0", hex: "#2b2d3a" },
  { name: "BG 1", variable: "bg1", hex: "#333648" },
  { name: "BG 2", variable: "bg2", hex: "#363a4e" },
  { name: "BG 3", variable: "bg3", hex: "#393e53" },
  { name: "BG 4", variable: "bg4", hex: "#3f445b" },
];

const ColorSwatch = ({
  color,
  index,
}: {
  color: { name: string; variable: string; hex: string; usage?: string };
  index: number;
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    void navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={copyToClipboard}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-bg3 bg-bg1 transition-all hover:border-bg4 hover:shadow-lg"
    >
      <div
        className="h-24 w-full transition-transform group-hover:scale-105"
        style={{ backgroundColor: color.hex }}
      />
      <div className="p-4 text-left">
        <div className="mb-1 flex items-center justify-between">
          <span className="font-jetbrains text-sm font-semibold text-fg">
            {color.name}
          </span>
          <span className="font-jetbrains text-xs text-grey_dim">
            {copied ? "Copied!" : color.hex}
          </span>
        </div>
        {color.usage && (
          <span className="font-jetbrains text-xs text-pgrey">{color.usage}</span>
        )}
      </div>
    </motion.button>
  );
};

const ColorPalette = () => {
  return (
    <section id="colors" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-jetbrains mb-4 inline-block text-sm text-ppurple">
            {"// Color Palette"}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-fg sm:text-4xl">
            Soft pastels, <span className="text-pblue">easy on the eyes</span>
          </h2>
          <p className="font-jetbrains mx-auto max-w-2xl text-pgrey">
            Carefully crafted colors that reduce eye strain during long coding
            sessions while maintaining excellent readability and contrast.
          </p>
        </motion.div>

        {/* Main colors */}
        <div className="mb-12">
          <h3 className="font-jetbrains mb-6 text-sm font-semibold uppercase tracking-wider text-grey_dim">
            Syntax Colors
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {colors.map((color, index) => (
              <ColorSwatch key={color.variable} color={color} index={index} />
            ))}
          </div>
        </div>

        {/* Background colors */}
        <div>
          <h3 className="font-jetbrains mb-6 text-sm font-semibold uppercase tracking-wider text-grey_dim">
            Background Colors
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {backgrounds.map((color, index) => (
              <ColorSwatch key={color.variable} color={color} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorPalette;
