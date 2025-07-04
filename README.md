# Leandro Pedroso - Portfolio Website

A modern, responsive personal portfolio website showcasing professional experience, projects, and skills. Built with cutting-edge web technologies and designed with accessibility and performance in mind.

## 🚀 Technologies Used

### Frontend Framework
- **[Next.js 15.1.6](https://nextjs.org/)** - React-based full-stack framework with App Router
- **[React 19](https://react.dev/)** - Latest version with enhanced features and performance
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript development

### Styling & UI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Fira Code Font](https://github.com/tonsky/FiraCode)** - Monospaced font with programming ligatures
- **[Phosphor Icons](https://phosphor-icons.com/)** - Modern icon library for React
- **Custom CSS Variables** - For theme management and dark/light mode support

### Developer Experience
- **[ESLint 9](https://eslint.org/)** - Code linting and quality enforcement
- **[Prettier 3.4](https://prettier.io/)** - Code formatting with Tailwind CSS plugin
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization

### Utilities & Libraries
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind CSS classes efficiently

## 📁 Project Structure

```
├── public/                  # Static assets
│   ├── projects/           # Project images and assets
│   ├── brand.svg          # Brand logo
│   └── leandro_pedroso.pdf # Resume/CV
├── src/
│   ├── app/               # Next.js App Router directory
│   │   ├── components/    # React components
│   │   │   ├── Experience.tsx
│   │   │   ├── ExperienceCard.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Spotlight.tsx
│   │   │   └── ...
│   │   ├── globals.css    # Global styles and CSS variables
│   │   ├── layout.tsx     # Root layout component
│   │   └── page.tsx       # Home page
│   ├── data/              # Content data
│   │   ├── experience.json # Professional experience data
│   │   └── project.json   # Portfolio projects data
│   ├── models/            # TypeScript type definitions
│   │   ├── experience.ts  # Experience data types
│   │   └── project.ts     # Project data types
│   └── utils/             # Utility functions
│       └── cn.ts          # className utility function
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
├── eslint.config.mjs      # ESLint configuration
└── .prettierrc            # Prettier configuration
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Development

Start the development server with Turbopack for faster builds:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Development with Debugging

For debugging purposes, you can start the development server with Node.js inspector:

```bash
npm run dev:inspect
```

This enables debugging capabilities for IDE integration.

## 🏗️ Build & Deploy

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This command:
- Compiles TypeScript to JavaScript
- Optimizes and bundles all assets
- Generates static pages where possible
- Creates a `.next` directory with production files

### Running Production Build Locally

Test the production build locally:

```bash
npm run start
```

### Deployment Options

#### Vercel (Recommended)
1. Connect your repository to [Vercel](https://vercel.com)
2. Vercel automatically detects Next.js and deploys with optimal settings
3. Automatic deployments on every push to main branch

#### Other Platforms
- **Netlify**: Works with Next.js static export
- **Docker**: Can be containerized for any cloud provider
- **Traditional hosting**: Use `next export` for static sites

### Environment Variables

If you need environment variables, create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add other environment variables as needed
```

## 🎨 Customization

### Content Management

#### Experience Data
Edit `src/data/experience.json` to update professional experience:

```json
{
  "company": {
    "name": "Company Name",
    "website": "https://company.com",
    "location": {
      "city": "City",
      "state": "State",
      "country": "Country"
    }
  },
  "positions": [{
    "title": "Job Title",
    "description": "HTML-formatted description",
    "startDate": "Mon YYYY",
    "endDate": "Mon YYYY", // or "Present"
    "skills": ["Skill1", "Skill2"]
  }]
}
```

#### Projects Data
Edit `src/data/project.json` to update portfolio projects:

```json
{
  "title": "Project Name",
  "description": "Project description",
  "imageURL": "/projects/image.png",
  "githubURL": "https://github.com/user/repo",
  "liveURL": "https://project-url.com",
  "technologies": ["Tech1", "Tech2"]
}
```

### Styling & Theme

#### Color Scheme
Modify CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #fdf7e9;  /* Light background */
  --foreground: #ecb365;  /* Accent color */
  --primary: #2a4d69;     /* Primary text */
  --secondary: #5591b9;   /* Secondary text */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #041c32;  /* Dark background */
    --foreground: #2a4d69;  /* Dark accent */
    --primary: #ecb365;     /* Dark primary text */
    --secondary: #a2d2ff;   /* Dark secondary text */
  }
}
```

#### Tailwind Configuration
Extend Tailwind CSS in `tailwind.config.ts`:

```typescript
extend: {
  colors: {
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    // Add custom colors
  },
  // Add custom spacing, fonts, etc.
}
```

## 🧩 Component Architecture

### Core Components

- **Header.tsx**: Hero section with personal information and navigation
- **Experience.tsx**: Professional experience timeline
- **Projects.tsx**: Portfolio projects showcase
- **Navigation.tsx**: Smooth scrolling navigation menu
- **Spotlight.tsx**: Interactive background effect
- **Section.tsx**: Reusable section wrapper with consistent styling

### Component Patterns

- **Composition**: Components are designed to be composable and reusable
- **TypeScript**: Full type safety with defined interfaces
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## 📦 Library Documentation

### @phosphor-icons/react
Modern, customizable icons with consistent design language.

```tsx
import { GithubLogo, Globe } from '@phosphor-icons/react'

<GithubLogo size={20} className="text-primary" />
```

### clsx & tailwind-merge
Utility for conditional and merged className management.

```tsx
import { cn } from '@/utils/cn'

const className = cn(
  'base-class',
  isActive && 'active-class',
  'override-class'
)
```

### Fira Code Font
Monospaced font with programming ligatures, loaded via `next/font/google`.

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run dev:inspect  # Start with debugging enabled

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npx prettier --write . # Format code with Prettier
```

## 🚀 Performance Features

- **Next.js App Router**: Improved performance and developer experience
- **Static Generation**: Pages pre-rendered at build time where possible
- **Image Optimization**: Automatic image optimization with Next.js
- **Font Optimization**: Self-hosted Google Fonts with preloading
- **CSS Optimization**: Tailwind CSS purging and PostCSS optimization
- **Bundle Analysis**: Optimized bundle size with tree shaking

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is personal portfolio code. Feel free to use as inspiration for your own portfolio, but please don't copy the content directly.

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome! Feel free to:

1. Open an issue for bugs or suggestions
2. Submit a pull request for improvements
3. Share feedback on design or functionality

## 📞 Contact

- **Website**: [leandroppf.com](https://leandroppf.com)
- **GitHub**: Check the repository for contact information
- **Resume**: Available at `/leandro_pedroso.pdf`

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
