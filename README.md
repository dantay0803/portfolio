# Daniel Taylor - Portfolio

A modern, responsive portfolio website showcasing my work as a Software Engineer. Built with Gatsby, React, TypeScript, and Tailwind CSS.

🔗 **Live Site**: [https://www.danielt.co.uk/](https://www.danielt.co.uk/)

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [License](#license)

## 🎯 Overview

This portfolio website serves as a showcase of my technical skills and professional experience. It features:

- A comprehensive project portfolio highlighting work with React, Unity, and mobile applications
- A blog section for sharing technical insights and development experiences
- Detailed resume/experience section
- Responsive design optimized for all devices
- Fast performance with static site generation

## 🛠 Tech Stack

### Core Technologies

- **[Gatsby](https://www.gatsbyjs.com/)** (v5.13.0) - React-based static site generator
- **[React](https://reactjs.org/)** (v18.2.0) - UI library
- **[TypeScript](https://www.typescriptlang.org/)** (v5.1.6) - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** (v3.4.0) - Utility-first CSS framework

### Key Plugins & Libraries

- **[MDX](https://mdxjs.com/)** - Blog content with JSX components
- **[Gatsby Image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)** - Optimized image loading
- **[Headless UI](https://headlessui.com/)** - Accessible UI components
- **[Heroicons](https://heroicons.com/)** - Beautiful SVG icons
- **Gatsby Plugin Sitemap** - SEO optimization
- **Gatsby Plugin Manifest** - PWA support

## ✨ Features

- **Static Site Generation** - Fast loading times with pre-rendered pages
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Blog with MDX** - Write blog posts with React components
- **Image Optimization** - Automatic image optimization with gatsby-plugin-image
- **SEO Friendly** - Meta tags, sitemap, and semantic HTML
- **Type Safety** - Full TypeScript implementation
- **Accessibility** - ARIA labels and keyboard navigation
- **Contact Form** - Netlify Forms integration
- **Smooth Navigation** - Anchor link scrolling

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dantay0803/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run develop
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## 💻 Development

### Available Scripts

```bash
npm run develop    # Start development server
npm run start      # Alias for develop
npm run build      # Build for production
npm run serve      # Serve production build locally
npm run clean      # Clean Gatsby cache
npm run typecheck  # Run TypeScript type checking
```

### Development Workflow

1. **Local Development**

   - Run `npm run develop` to start the development server
   - Make changes to components in `src/components/`
   - Edit pages in `src/pages/`
   - Add blog posts to `blog/` directory

2. **Type Checking**

   - Run `npm run typecheck` to verify TypeScript types
   - Fix any type errors before committing

3. **Building**
   - Run `npm run build` to create a production build
   - Test the build with `npm run serve`

## 📁 Project Structure

```
portfolio/
├── blog/                      # Blog posts in MDX format
│   ├── 0000 - Post Title/
│   │   ├── post.mdx
│   │   └── images/
├── src/
│   ├── assets/               # Static assets
│   │   ├── images/
│   │   └── files/
│   ├── components/           # React components
│   │   ├── blog/            # Blog-specific components
│   │   ├── projectDetails/  # Project modal content
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   └── ...
│   ├── pages/               # Page components
│   │   ├── index.tsx        # Home page
│   │   └── blog.tsx         # Blog listing page
│   ├── styles/              # Global styles
│   │   └── global.css
│   ├── templates/           # Page templates
│   │   └── blog.tsx         # Blog post template
│   └── types/               # TypeScript type definitions
│       └── blog.ts
├── gatsby-config.ts         # Gatsby configuration
├── gatsby-node.js           # Gatsby Node APIs
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new folder in `blog/` with format: `XXXX - Post Title/`
2. Add an MDX file with frontmatter:

   ```mdx
   ---
   title: Your Post Title
   slug: /blog/your-post-title
   categories: [Category1, Category2]
   date: 2024-01-01
   id: 0014
   featuredImage: image.jpg
   featuredImageAlt: Image description
   excerpt: Brief description of the post
   ---

   Your content here...
   ```

3. Add any images to the same folder
4. The post will automatically appear in the blog section

### Updating Projects

**Step 1:** Edit the `PROJECTS` array in `src/data/projects.ts` to add or modify projects:

```typescript
export const PROJECTS: ProjectData[] = [
  {
    id: "project-id",
    title: "Project Title",
    tools: ["Tool1", "Tool2"],
    description: "Project description",
    imagePath: "../assets/images/thumbnails/thumbnail.jpg",
    imageAlt: "Image description",
    detailsComponent: "ComponentName",
  },
];
```

**Step 2:** Add the project image to `src/components/Projects.tsx` in the `imageMap`:

```typescript
const imageMap: Record<string, React.ReactNode> = {
  "project-id": (
    <StaticImage
      className="w-full h-64 object-cover"
      src="../assets/images/thumbnails/thumbnail.jpg"
      alt="Image description"
    />
  ),
};
```

**Note:**

- The `id` in `projects.ts` must match the key in `imageMap`
- `StaticImage` requires literal string paths (not variables) for build-time optimization
- After adding a project, create the corresponding detail component in `src/components/projectDetails/`

### Updating Work Experience

Edit the `WORK_EXPERIENCE` array in `src/data/workExperience.ts` to update your professional experience:

```typescript
export const WORK_EXPERIENCE: WorkExperienceData[] = [
  {
    id: "company-id",
    company: "Company Name",
    link: "https://company.com",
    date: "2020 - Present",
    role: "Your Role",
    description: ["Description paragraph 1", "Description paragraph 2"],
  },
];
```

### Updating Navigation

Edit navigation links in `src/constants/navigation.ts`:

```typescript
// Main navigation (homepage)
export const MAIN_NAV_LINKS: NavigationLink[] = [
  { text: "section name", url: "#section" },
];

// Blog navigation
export const BLOG_NAV_LINKS: NavigationLink[] = [
  { text: "All Posts", url: "/blog" },
];
```

## 🚀 Deployment

The site is configured for deployment on Netlify:

1. **Automatic Deployments**

   - Push to the main branch triggers automatic deployment
   - Pull requests create preview deployments

2. **Manual Deployment**

   ```bash
   npm run build
   # Upload the public/ folder to your hosting provider
   ```

3. **Environment Variables**
   - No environment variables required for basic functionality
   - Add Netlify form configuration in `gatsby-config.ts` if needed

## 📄 License

This project is private and proprietary. All rights reserved.

## 👨‍💻 Author

**Daniel Taylor**

- Website: [danielt.co.uk](https://www.danielt.co.uk/)
- LinkedIn: [danielt0803](https://www.linkedin.com/in/danielt0803/)
- GitHub: [dantay0803](https://github.com/dantay0803)

---

Built with ❤️ using Gatsby and React
