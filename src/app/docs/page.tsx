"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, FileText, ChevronRight, Code, ArrowUpRight } from "lucide-react";
import { DocsSidebar, docsSections } from "@/components/docs/DocsSidebar";
import { docsContent } from "@/components/docs/docs-content";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [activeSubsection, setActiveSubsection] = useState("introduction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const findSection = () => {
    for (const section of docsSections) {
      const subsection = section.subsections.find((s) => s.id === activeSubsection);
      if (subsection) return { section, subsection };
    }
    return null;
  };

  const current = findSection();

  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];

    return lines.map((line, idx) => {
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBlockContent = [];
          return null;
        } else {
          inCodeBlock = false;
          return (
            <div key={idx} className="my-6">
              <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto border border-white/10">
                <code className="text-sm text-zinc-300 font-mono">
                  {codeBlockContent.join('\n')}
                </code>
              </pre>
            </div>
          );
        }
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return null;
      }

      if (line.startsWith('####')) {
        return (
          <h4 key={idx} className="text-lg font-bold text-white mt-4 mb-2">
            {line.replace(/####\s*/, '')}
          </h4>
        );
      }
      if (line.startsWith('###')) {
        return (
          <h3 key={idx} className="text-xl font-bold text-white mt-6 mb-3">
            {line.replace(/###\s*/, '')}
          </h3>
        );
      }
      if (line.startsWith('##')) {
        return (
          <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">
            {line.replace(/##\s*/, '')}
          </h2>
        );
      }
      if (line.startsWith('#')) {
        return (
          <h1 key={idx} className="text-3xl font-bold text-white mt-8 mb-4">
            {line.replace(/#\s*/, '')}
          </h1>
        );
      }
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return (
          <li key={idx} className="ml-4 text-zinc-300 my-1 list-disc marker:text-cyan-400">
            {line.replace(/^[-*]\s/, '')}
          </li>
        );
      }
      if (line.trim() === '') {
        return <br key={idx} className="my-2" />;
      }
      return (
        <p key={idx} className="text-zinc-300 my-2 leading-relaxed">
          {line}
        </p>
      );
    }).filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-amber-500/20 border border-white/10"
            >
              <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white group-hover:text-gradient-premium transition-all">
                LUCIFIZ
              </span>
              <span className="text-[9px] text-cyan-400/70 uppercase tracking-[0.3em]">
                Docs
              </span>
            </div>
          </Link>
          <Button
            variant="outline"
            className="lg:hidden border-white/10"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      <div className="flex pt-20">
        {/* Sidebar */}
        <DocsSidebar
          activeSection={activeSection}
          activeSubsection={activeSubsection}
          onSectionChange={setActiveSection}
          onSubsectionChange={setActiveSubsection}
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Main Content */}
        <main className="flex-1 min-h-screen lg:ml-80">
          {current && (
            <motion.div
              key={activeSubsection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto p-8 lg:p-16"
            >
              <div className="glass-dark border border-white/10 rounded-2xl p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-8">
                  <div className="p-2 rounded-lg bg-cyan-500/20">
                    <Code className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-white">
                    {current.subsection.title}
                  </h1>
                </div>

                <div className="prose prose-invert max-w-none">
                  {renderMarkdown(docsContent[activeSubsection] || '')}
                </div>

                {/* Navigation */}
                <div className="mt-16 pt-8 border-t border-white/10 flex justify-between gap-4">
                  <Button
                    variant="outline"
                    disabled={!current.section.subsections.find((s, idx) => {
                      const currentIdx = current.section.subsections.findIndex(sub => sub.id === activeSubsection);
                      return idx === currentIdx - 1;
                    })}
                    onClick={() => {
                      const currentIndex = current.section.subsections.findIndex((s) => s.id === activeSubsection);
                      if (currentIndex > 0) {
                        setActiveSubsection(current.section.subsections[currentIndex - 1].id);
                      }
                    }}
                    className="flex-1"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="gradient"
                    onClick={() => {
                      const currentIndex = current.section.subsections.findIndex((s) => s.id === activeSubsection);
                      if (currentIndex < current.section.subsections.length - 1) {
                        setActiveSubsection(current.section.subsections[currentIndex + 1].id);
                      }
                    }}
                    className="flex-1"
                  >
                    Next <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Back to Home */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-center"
              >
                <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                  Back to Home
                </Link>
              </motion.div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
