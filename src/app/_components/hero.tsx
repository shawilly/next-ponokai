"use client";
import AdventureIcon from "@/_components/adventure-icon";
import neovimSmallLogo from "@/assets/neovim-small-logo.svg";
import ponokaiLogo from "@/assets/ponokai-logo-with-icon.svg";
import vimLogo from "@/assets/vim-logo.svg";
import { motion } from "framer-motion";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Select, { type ActionMeta } from "react-select";
import Editor from "react-simple-code-editor";
import { LANGUAGE, highlightFunctions, samples } from "./code-block/samples";

interface LanguageOption {
  value: LANGUAGE;
  label: string;
}

const options = Object.values(LANGUAGE).map(
  (value: LANGUAGE): LanguageOption => ({
    value: value,
    label: value,
  }),
);

console.log(options);

const Hero = (): JSX.Element => {
  const [language, setLanguage] = useState(LANGUAGE.TS);
  const [languageDemo, setDemo] = useState(samples[LANGUAGE.TS]);

  const handleLanguageChange = (
    option: LanguageOption | null,
    _actionMeta: ActionMeta<LanguageOption>,
  ): void => {
    if (!option) return;
    setLanguage(option.value);
    setDemo(samples[option.value]);
  };

  return (
    <div className="max-w-screen text-fit grid max-h-screen grid-flow-row overflow-auto lg:ml-16 lg:mr-16 lg:grid-cols-2 lg:gap-16 lg:pl-16 lg:pr-16">
      <div className="flex h-screen flex-col items-start gap-[4rem] py-20">
        <div className="box-border grow-0 items-start">
          <Link href="https://github.com/shawilly/ponokai" target="_blank">
            <Image
              priority
              height={40}
              src={ponokaiLogo as StaticImport}
              alt="Ponokai, the pastelly Monokaiesque color scheme"
            />
          </Link>
        </div>
        <div className="flex grow flex-col items-start justify-center gap-5">
          <motion.h1
            className="from-pred to-pyellow bg-gradient-to-r bg-clip-text font-black text-transparent [font-size:_clamp(3em,5vw,4.5rem)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            A pastelly Monokaiesque color scheme
          </motion.h1>
          <motion.p
            className="font-jetbrains text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-pgreen">Pono</span>
            <span className="text-pblue">kai</span>{" "}
            <span className="text-pgreen">c</span>
            <span className="text-pred">o</span>
            <span className="text-porange">l</span>
            <span className="text-pyellow">o</span>
            <span className="text-pgreen">r</span>
            <span className="text-ppurple">s</span>.
            <br />
            <span className="text-pgreen">(constant)</span>
            <span className="text-pblue">(sea)</span>
          </motion.p>
        </div>
      </div>

      <div className="flex w-full grow items-center justify-center py-20">
        <div className="font-jetbrains flex w-full flex-col items-start justify-center rounded-l-md rounded-r-md bg-black p-4">
          <div className="text-bg1 w-full place-items-end pb-4">
            <Select
              options={options}
              isSearchable
              onChange={handleLanguageChange}
            />
          </div>
          <Editor
            value={languageDemo}
            className="bg-bg0 font-jetbrains text-l my-4 h-[100%] min-h-[100px] min-w-[100%] overflow-auto rounded-l-md rounded-r-md p-4"
            onValueChange={(code: string) => setDemo(code)}
            highlight={(code) => highlightFunctions[language](code)}
            padding={10}
            placeholder="Type some code..."
          />
          <motion.div
            className="my-2 flex flex-row items-center justify-start gap-4"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <AdventureIcon
              className="w-[9%]"
              href="https://github.com/shawilly/ponokai?tab=readme-ov-file#neovim"
              target="_blank"
              src={neovimSmallLogo as StaticImport}
              alt="Neovim logo"
            />
            <AdventureIcon
              className="w-[9%]"
              href="https://github.com/shawilly/ponokai?tab=readme-ov-file#vim"
              target="_blank"
              src={vimLogo as StaticImport}
              alt="Vim logo"
            />
          </motion.div>
          <span className="text-xs font-light italic">
            *just a taste; accurate highlighting is best experienced in your
            editor
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
