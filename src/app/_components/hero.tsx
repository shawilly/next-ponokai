"use client";
import AdventureIcon from "@/_components/adventure-icon";
import neovimSmallLogo from "@/assets/neovim-small-logo.svg";
import vimLogo from "@/assets/vim-logo.svg";
import { motion } from "framer-motion";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState } from "react";
import Editor from "react-simple-code-editor";
import { LANGUAGE, highlightFunctions, samples } from "./code-block/samples";

interface LanguageOption {
  value: LANGUAGE;
  label: string;
}

const options: LanguageOption[] = Object.values(LANGUAGE).map(
  (value: LANGUAGE): LanguageOption => ({
    value: value,
    label: value,
  }),
);

const Hero = (): JSX.Element => {
  const [language, setLanguage] = useState(LANGUAGE.TS);
  const [languageDemo, setDemo] = useState(samples[LANGUAGE.TS]);

  const handleLanguageChange = (lang: LANGUAGE): void => {
    setLanguage(lang);
    setDemo(samples[lang]);
  };

  return (
    <section className="relative min-h-screen pt-24">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-pred/10 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-ppurple/10 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-pgreen/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="font-jetbrains inline-block rounded-full border border-pgreen/30 bg-pgreen/10 px-4 py-1.5 text-sm text-pgreen">
                v1.0 — Now available for Neovim & Vim
              </span>
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl font-black leading-tight tracking-tight text-fg sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              A{" "}
              <span className="bg-gradient-to-r from-pred via-porange to-pyellow bg-clip-text text-transparent">
                pastelly
              </span>{" "}
              Monokai
              <br />
              color scheme
            </motion.h1>

            <motion.p
              className="font-jetbrains mb-8 text-lg text-pgrey"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-pgreen">Pono</span>
              <span className="text-pblue">kai</span> brings soft, pastel tones
              to your favorite editors. Easy on the eyes, beautiful on screen.
            </motion.p>

            <motion.div
              className="mb-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#install"
                className="font-jetbrains inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pgreen to-pblue px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
              >
                Get Started
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#colors"
                className="font-jetbrains inline-flex items-center gap-2 rounded-lg border border-bg4 bg-bg2 px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-pgrey"
              >
                View Colors
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="font-jetbrains text-sm text-grey_dim">
                Available for:
              </span>
              <div className="flex items-center gap-4">
                <AdventureIcon
                  className="w-8"
                  href="https://github.com/shawilly/ponokai?tab=readme-ov-file#neovim"
                  target="_blank"
                  src={neovimSmallLogo as StaticImport}
                  alt="Neovim"
                />
                <AdventureIcon
                  className="w-8"
                  href="https://github.com/shawilly/ponokai?tab=readme-ov-file#vim"
                  target="_blank"
                  src={vimLogo as StaticImport}
                  alt="Vim"
                />
              </div>
            </motion.div>
          </div>

          {/* Right column - Code editor */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-full overflow-hidden rounded-xl border border-bg3 bg-black shadow-2xl shadow-black/50">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-bg3 bg-bg_dim px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-pred/80" />
                  <div className="h-3 w-3 rounded-full bg-pyellow/80" />
                  <div className="h-3 w-3 rounded-full bg-pgreen/80" />
                </div>
                <div className="font-jetbrains flex items-center gap-1 text-xs text-grey_dim">
                  <span>demo.</span>
                  <span className="text-pblue">{language}</span>
                </div>
                <div className="w-14" /> {/* Spacer for balance */}
              </div>

              {/* Language tabs */}
              <div className="flex border-b border-bg3 bg-bg_dim/50">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleLanguageChange(opt.value)}
                    className={`font-jetbrains border-b-2 px-4 py-2 text-xs transition-colors ${
                      language === opt.value
                        ? "border-pblue text-pblue"
                        : "border-transparent text-grey_dim hover:text-pgrey"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Editor */}
              <div className="bg-bg0 p-4">
                <Editor
                  value={languageDemo}
                  className="font-jetbrains min-h-[280px] text-sm leading-relaxed"
                  onValueChange={(code: string) => setDemo(code)}
                  highlight={(code) => highlightFunctions[language](code)}
                  padding={12}
                  placeholder="Type some code..."
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                  }}
                />
              </div>

              {/* Editor footer */}
              <div className="font-jetbrains flex items-center justify-between border-t border-bg3 bg-bg_dim px-4 py-2 text-xs text-grey_dim">
                <span>
                  <span className="text-pgreen">●</span> Live preview
                </span>
                <span className="italic text-pgrey/60">
                  *highlighting may vary in editor
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
