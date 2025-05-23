# GitHub Copilot Custom Instructions

This file contains custom instructions for GitHub Copilot when working in this repository.

## Project Configuration

- **Package Manager**: Always use pnpm for package management. Prefer pnpm commands over npm or yarn.
- **Language**: TypeScript should be used throughout the project. Avoid plain JavaScript.
- **UI Libraries**:
  - Shadcn UI as the primary UI component library
  - Lucide React for icons
  - @uidotdev/usehooks for React hooks

## Workflow Guidelines

- Before suggesting to install a package, check package.json to see if it's already installed.
- Always follow TypeScript best practices (types, interfaces, etc.).
- Follow the existing project structure when creating new files or components.
- Keep code clean, readable, and well-commented.

## Code Style

- Use functional components with hooks in React.
- Use proper TypeScript typing for all variables, functions, and components.
- Follow the component structure as defined in the codebase.
- Use named exports for components and functions.

## Folder Organization

- Place new components in the appropriate subdirectory in the `src/components` folder.
- Shared UI components go in `src/components/ui`.
- Page-specific components should be organized by feature.
- Reusable hooks should be added to `src/hooks`.
