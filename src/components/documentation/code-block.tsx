"use client";

import { useState, useRef, useEffect } from "react";
import { Check, Clipboard, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Simple code formatter - no syntax highlighting but preserves whitespace and line breaks
const formatCode = (code: string, language: string): JSX.Element => {
  return (
    <>
      {code.split('\n').map((line, i) => (
        <div key={i} className="whitespace-pre">
          {line}
        </div>
      ))}
    </>
  );
};

interface CodeBlockProps {
  title?: string;
  languages: Record<string, string>;
}

export function CodeBlock({ title, languages }: CodeBlockProps) {
  const [activeLanguage, setActiveLanguage] = useState<string>(Object.keys(languages)[0]);
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const languageKeys = Object.keys(languages);

  const copyToClipboard = () => {
    if (!codeRef.current) return;

    const code = languages[activeLanguage];
    navigator.clipboard.writeText(code);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset to first language when languages change
  useEffect(() => {
    if (languageKeys.length > 0) {
      setActiveLanguage(languageKeys[0]);
    }
  }, [JSON.stringify(languageKeys)]);

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      {/* Header with title and language tabs */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 dark:border-gray-800 dark:bg-gray-900">
        {title && (
          <div className="py-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            {title}
          </div>
        )}

        <Tabs 
          value={activeLanguage} 
          onValueChange={setActiveLanguage}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <TabsList className="bg-transparent">
              {languageKeys.map((lang) => (
                <TabsTrigger 
                  key={lang} 
                  value={lang}
                  className={cn(
                    "text-xs font-medium",
                    "data-[state=active]:bg-transparent data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400",
                    "data-[state=inactive]:text-gray-500 dark:data-[state=inactive]:text-gray-400"
                  )}
                >
                  {lang}
                </TabsTrigger>
              ))}
            </TabsList>

            <button
              onClick={copyToClipboard}
              className="flex items-center rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Clipboard className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Code content for each language */}
          {languageKeys.map((lang) => (
            <TabsContent key={lang} value={lang} className="mt-0">
              <div className="relative">
                <pre
                  ref={codeRef}
                  className="overflow-x-auto bg-gray-900 p-4 text-sm text-gray-50 font-mono"
                >
                  <code className="language-code">{formatCode(languages[lang], lang)}</code>
                </pre>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
