"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type PluginManager = "lazy" | "packer" | "vim-plug" | "manual";

const installMethods: Record<
  PluginManager,
  { name: string; code: string; editor: string }
> = {
  lazy: {
    name: "lazy.nvim",
    editor: "Neovim",
    code: `{
  "shawilly/ponokai",
  lazy = false,
  priority = 1000,
  config = function()
    vim.g.ponokai_transparent_background = "1"
    vim.g.ponokai_enable_italic = "1"
    vim.g.ponokai_style = "kitty"
    vim.cmd.colorscheme("ponokai")
  end,
}`,
  },
  packer: {
    name: "packer.nvim",
    editor: "Neovim",
    code: `use {
  'shawilly/ponokai',
  config = function()
    vim.g.ponokai_transparent_background = "1"
    vim.g.ponokai_enable_italic = "1"
    vim.g.ponokai_style = "kitty"
    vim.cmd.colorscheme("ponokai")
  end
}`,
  },
  "vim-plug": {
    name: "vim-plug",
    editor: "Vim/Neovim",
    code: `" Add to your .vimrc or init.vim
Plug 'shawilly/ponokai'

" Then add after plug#end()
set termguicolors
let g:ponokai_style = 'kitty'
let g:ponokai_better_performance = 1
colorscheme ponokai`,
  },
  manual: {
    name: "Manual",
    editor: "Vim/Neovim",
    code: `# Create directory and clone
mkdir -p ~/.vim/pack/colors/opt
git clone --depth 1 \\
  https://github.com/shawilly/ponokai.git \\
  ~/.vim/pack/colors/opt/ponokai

# Add to your vimrc
packadd! ponokai
set termguicolors
let g:ponokai_style = 'kitty'
colorscheme ponokai`,
  },
};

const Install = () => {
  const [selected, setSelected] = useState<PluginManager>("lazy");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    void navigator.clipboard.writeText(installMethods[selected].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="font-jetbrains mb-4 inline-block text-sm text-porange">
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            // Installation
          </span>
          <h2 className="mb-4 text-3xl font-bold text-fg sm:text-4xl">
            Get started in <span className="text-pgreen">seconds</span>
          </h2>
          <p className="font-jetbrains mx-auto max-w-2xl text-pgrey">
            Choose your preferred plugin manager and you&apos;re ready to go.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-xl border border-bg3 bg-black"
        >
          {/* Tab header */}
          <div className="flex flex-wrap border-b border-bg3 bg-bg_dim">
            {(Object.keys(installMethods) as PluginManager[]).map((key) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`font-jetbrains border-b-2 px-4 py-3 text-sm transition-colors ${
                  selected === key
                    ? "border-pgreen bg-bg0/50 text-pgreen"
                    : "border-transparent text-grey_dim hover:text-pgrey"
                }`}
              >
                {installMethods[key].name}
              </button>
            ))}
          </div>

          {/* Code block */}
          <div className="relative">
            <div className="font-jetbrains absolute right-4 top-4 flex items-center gap-3">
              <span className="rounded bg-bg3 px-2 py-1 text-xs text-grey_dim">
                {installMethods[selected].editor}
              </span>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 rounded bg-bg3 px-3 py-1.5 text-xs text-pgrey transition-colors hover:bg-bg4 hover:text-fg"
              >
                {copied ? (
                  <>
                    <svg
                      className="h-3.5 w-3.5 text-pgreen"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
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
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
            <pre className="overflow-x-auto bg-bg0 p-6 pt-14 text-sm leading-relaxed text-fg">
              <code>{installMethods[selected].code}</code>
            </pre>
          </div>
        </motion.div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="font-jetbrains text-sm text-grey_dim">
            Need help?{" "}
            <a
              href="https://github.com/shawilly/ponokai#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pblue transition-colors hover:text-pgreen"
            >
              Check the documentation
            </a>{" "}
            or{" "}
            <a
              href="https://github.com/shawilly/ponokai/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pblue transition-colors hover:text-pgreen"
            >
              open an issue
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Install;
