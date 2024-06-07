// TODO: add html, jsx, tsx when hljs hack is fixed
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import typescript from "highlight.js/lib/languages/typescript";
// import xml from "highlight.js/lib/languages/xml";
import { raw_samples } from "./raw-samples";
import { marked } from "marked";
import { type ReactNode } from "react";

export enum LANGUAGE {
  JS = "javascript",
  TS = "typescript",
  PYTHON = "python",
  // HTML = "html",
  // JSX = "jsx",
  // TSX = "tsx",
}

hljs.registerLanguage(LANGUAGE.JS, javascript);
hljs.registerLanguage(LANGUAGE.PYTHON, python);
hljs.registerLanguage(LANGUAGE.TS, typescript);
// hljs.registerLanguage(LANGUAGE.HTML, xml);

const equals = (input: string): string => {
  const regex = /(\s)=(\s)/g;
  return input.replace(regex, '<span class="hljs-name"> = </span>');
};

const classes = (input: string): string => {
  const stringFunctionRegex = /hljs-title\sclass_/g;
  return input.replace(stringFunctionRegex, "hljs-type hljs-emphasis");
};

const functions = (input: string): string => {
  const stringFunctionRegex = /hljs-title\sfunction_/g;
  return input.replace(stringFunctionRegex, "hljs-section");
};

const modifyHighlight = (input: string): string => {
  const funcs = [equals, classes, functions];
  return funcs.reduce((acc, func) => func(acc), input);
};

/**
 * Highlight code using highlight.js and wrap symbols in a span tag
 * @param code - the code to be highlighted
 * @param language - the language of the code
 * @returns the highlighted code with symbols wrapped in a span tag
 */
const LanguageDemo = (demo: string) => {
  const modHL: string = modifyHighlight(demo);
  return <div dangerouslySetInnerHTML={{ __html: marked(modHL) }}></div>;
};

export const typescriptDemo = hljs.highlight(raw_samples.typescript, {
  language: LANGUAGE.TS,
}).value;

export const highlightFunctions: Record<LANGUAGE, (code: string) => ReactNode> =
  {
    [LANGUAGE.JS]: (code: string) =>
      LanguageDemo(hljs.highlight(code, { language: LANGUAGE.JS }).value),
    [LANGUAGE.TS]: (code: string) =>
      LanguageDemo(hljs.highlight(code, { language: LANGUAGE.TS }).value),
    [LANGUAGE.PYTHON]: (code: string) =>
      LanguageDemo(hljs.highlight(code, { language: LANGUAGE.PYTHON }).value),
    // [LANGUAGE.HTML]: (code: string) =>
    //   LanguageDemo(hljs.highlight(code, { language: LANGUAGE.HTML }).value),
    // [LANGUAGE.JSX]: (code: string) =>
    //   LanguageDemo(hljs.highlight(code, { language: LANGUAGE.JS }).value), // Using JS for JSX
    // [LANGUAGE.TSX]: (code: string) =>
    //   LanguageDemo(hljs.highlight(code, { language: LANGUAGE.TS }).value), // Using TS for TSX
  };

export const samples = {
  [LANGUAGE.JS]: raw_samples.javascript,
  [LANGUAGE.TS]: raw_samples.typescript,
  [LANGUAGE.PYTHON]: raw_samples.python,
  // [LANGUAGE.HTML]: raw_samples.html,
  // [LANGUAGE.JSX]: raw_samples.jsx,
  // [LANGUAGE.TSX]: raw_samples.tsx,
};
