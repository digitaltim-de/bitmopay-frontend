export interface Coin {
  name: string;
  icon: string;
}

export interface Integration {
  name: string;
  icon: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  modalTitle?: string;
  modalDescription?: string;
  ctaText?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Solution {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface CodeBlock {
  title: string;
  languages: Record<string, string>;
}

export interface DocumentationSection {
  id: string;
  title: string;
  content: string;
  codeBlocks?: CodeBlock[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export interface Documentation {
  slug: string;
  title: string;
  description: string;
  icon: string;
  sections: DocumentationSection[];
}

export interface ApiEndpoint {
  method: string;
  url: string;
  description: string;
  parameters?: Array<{
    name: string;
    type: string;
    required: boolean;
    description: string;
  }>;
  requestExample?: string;
  responseExample?: string;
  headers?: Array<{
    name: string;
    type: string;
    required: boolean;
    description: string;
  }>;
}

export interface ApiReferenceSection {
  id: string;
  title: string;
  content: string;
  endpoints?: ApiEndpoint[];
  codeBlocks?: CodeBlock[];
}

export interface ApiReference {
  slug: string;
  title: string;
  description: string;
  icon: string;
  sections: ApiReferenceSection[];
}
