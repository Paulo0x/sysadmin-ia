'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface MDXContentProps {
  source: MDXRemoteSerializeResult
}

const components = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold text-neon-cyan mb-6 mt-8 drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-bold text-neon-cyan mb-4 mt-8 border-b-2 border-neon-cyan/30 pb-2 drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-semibold text-neon-purple mb-3 mt-6 drop-shadow-[0_0_10px_rgba(176,0,255,0.5)]" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-xl font-semibold text-neon-purple mb-2 mt-4" {...props} />
  ),
  p: (props: any) => (
    <p className="text-dark-text leading-relaxed mb-4" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-dark-text" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-dark-text" {...props} />
  ),
  li: (props: any) => (
    <li className="ml-4" {...props} />
  ),
  code: (props: any) => {
    if (props.className?.includes('language-')) {
      return (
        <code className="block bg-dark-bg text-dark-text p-4 rounded-lg overflow-x-auto text-sm font-mono border border-neon-cyan/20" {...props} />
      )
    }
    return (
      <code className="bg-dark-card text-neon-cyan px-1.5 py-0.5 rounded text-sm font-mono border border-neon-cyan/30" {...props} />
    )
  },
  pre: (props: any) => (
    <pre className="bg-dark-bg text-dark-text p-4 rounded-lg overflow-x-auto mb-4 border border-neon-cyan/20" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-neon-magenta pl-4 italic text-dark-text/80 my-4" {...props} />
  ),
  a: (props: any) => (
    <a className="text-neon-cyan hover:text-neon-magenta underline transition-colors" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-dark-border border border-dark-border" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="px-4 py-2 bg-dark-card text-left text-xs font-medium text-neon-cyan uppercase tracking-wider border border-dark-border" {...props} />
  ),
  td: (props: any) => (
    <td className="px-4 py-2 text-sm text-dark-text border border-dark-border" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-neon-magenta" {...props} />
  ),
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose-custom max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  )
}
