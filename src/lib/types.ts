export interface Coin {
  name: string
  icon: string
}

export interface Integration {
  name: string
  icon: string
}

export interface Partner {
  name: string
  logo: string
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Stat {
  value: string
  label: string
}

export interface Solution {
  title: string
  description: string
  icon: string
  link: string
}

export interface CodeBlock {
  title: string
  languages: Record<string, string>
}

export interface DocumentationSection {
  id: string
  title: string
  content: string
  codeBlocks?: CodeBlock[]
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export interface Documentation {
  slug: string
  title: string
  description: string
  icon: string
  sections: DocumentationSection[]
}
