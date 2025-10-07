# Nandini Anand - Professional Portfolio

![Portfolio Preview](https://imgix.cosmicjs.com/25bc4a40-a385-11f0-936e-dbe343b25d95-photo-1460925895917-afdab827c52f-1759845268818.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, elegant, and animated personal portfolio website showcasing Nandini Anand's professional journey in academic operations, business development, and applied mathematics. Built with Next.js 15, TypeScript, and Cosmic CMS.

## Features

- 🎨 **Modern Pastel Design** - Elegant lavender and blue color scheme with smooth animations
- 🌟 **Interactive Hero Section** - Animated geometric shapes and personalized greeting
- ⏱️ **Experience Timeline** - Vertical timeline showcasing professional career progression
- 🎯 **Project Showcase** - Detailed research project displays with expandable content
- 📊 **Animated Skills** - Progress bars showing proficiency levels across various skills
- 🏆 **Certificate Gallery** - Responsive grid of professional certifications
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- 🌓 **Dark/Light Mode** - Theme toggle for comfortable viewing
- 🚀 **Performance Optimized** - Server-side rendering with Next.js 15
- 📈 **Scroll Progress Indicator** - Visual feedback for page navigation

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68e51a36260d9dd939d1c3ef&clone_repository=68e51d81260d9dd939d1c41e)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a modern, elegant, and animated personal portfolio website for Nandini Anand, a professional with experience in academic operations, business development, and a strong background in mathematics and technology.
>
> Website Goals:
>
> Showcase Nandini's education, experience, projects, and skills in a creative and professional way.
>
> Include subtle scroll-based animations, smooth transitions, and interactive hover effects.
>
> Use a clean pastel color palette (lavender, white, soft blue, or blush pink) for a feminine yet professional vibe.
>
> The website should feel minimal, premium, and futuristic, suitable for a professional and academic audience.
>
> Sections to Include:
>
> Hero Section: Animated intro with her name — "Hi, I'm Nandini Anand" and tagline "Business Developer | Academic Operations | Math Enthusiast". Add background animation (like gradient motion or floating geometric shapes).
>
> About Section: Short bio with her education and interests. Include a professional photo placeholder.
>
> Experience Section: Timeline view of her work experience (Physics Wallah, Maantech Technologies, WoRisGo, Movido). Each with icons and hover animations.
>
> Projects Section: Cards for her project "Various Demanding Model in Inventory Management - EOQ Model" with expandable modal to show details.
>
> Skills Section: Animated skill bars for Technical Skills (C/C++, Python, Java, LaTeX, Tally, MS Office) and Interpersonal Skills (Leadership, Teamwork, Problem Solving).
>
> Certificates Section: Scrollable carousel or grid showing certificates (TCS NQT, Internshala, IIT Madras Ambassador, etc.).
>
> Publications Section: Highlight her "Research on Economic Order Quantity Demand" paper.
>
> Contact Section: Interactive contact form and links to her email, LinkedIn, and location.
>
> Technical Requirements:
>
> Use HTML, CSS, and JavaScript (GSAP or AOS.js) for smooth animations.
>
> Fully responsive for all devices (mobile-first design).
>
> Include a dark/light mode toggle.
>
> Use modern typography (e.g., Poppins or Inter).
>
> Add a scroll progress indicator and animated navbar.
>
> Output:
> Generate all the code (HTML, CSS, JS) for this website design. Keep the structure well-commented for easy customization."

### Code Generation Prompt

> "Based on the content model I created for 'Create a modern, elegant, and animated personal portfolio website for Nandini Anand...', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Cosmic CMS
- **Image Optimization**: imgix
- **Fonts**: Inter (Google Fonts)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Cosmic CMS account with your portfolio content
- Environment variables (see below)

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Portfolio Settings

```typescript
import { cosmic } from '@/lib/cosmic'

const settings = await cosmic.objects
  .findOne({
    type: 'portfolio-settings',
    slug: 'nandini-anand-portfolio-settings'
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

### Fetching Experience Entries

```typescript
const response = await cosmic.objects
  .find({
    type: 'experience-entries'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const experiences = response.objects.sort((a, b) => {
  const dateA = new Date(a.metadata.start_date).getTime()
  const dateB = new Date(b.metadata.start_date).getTime()
  return dateB - dateA // Newest first
})
```

### Fetching Skills by Category

```typescript
const response = await cosmic.objects
  .find({
    type: 'skills'
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)

// Group skills by category
const skillsByCategory = response.objects.reduce((acc, skill) => {
  const category = skill.metadata.skill_category.key
  if (!acc[category]) acc[category] = []
  acc[category].push(skill)
  return acc
}, {} as Record<string, typeof response.objects>)
```

## Cosmic CMS Integration

This portfolio uses Cosmic CMS as a headless CMS to manage all content dynamically. The content model includes:

### Content Types

1. **Portfolio Settings** (Singleton)
   - Personal information (name, tagline, bio)
   - Profile photo
   - Education details
   - Contact information (email, LinkedIn, location)
   - Theme colors (primary and secondary)
   - Hero animation preference

2. **Experience Entries**
   - Company name and logo
   - Role/position
   - Start and end dates
   - Current employment status
   - Detailed description
   - Icon emoji

3. **Projects**
   - Project title and type
   - Short and full descriptions
   - Technologies used
   - Featured image
   - Project date
   - Publication link

4. **Skills**
   - Skill name
   - Category (Technical, Interpersonal, Tools)
   - Proficiency level (0-100)
   - Icon emoji

5. **Certificates**
   - Certificate title
   - Issuing organization
   - Issue date
   - Certificate image
   - Verification link
   - Description

All content is fetched server-side for optimal performance and SEO.

## Deployment Options

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push your code to GitHub
2. Import your repository in Netlify
3. Add environment variables in Netlify dashboard
4. Deploy!

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── About.tsx           # About section
│   ├── Certificates.tsx    # Certificates gallery
│   ├── Contact.tsx         # Contact information
│   ├── CosmicBadge.tsx     # "Built with Cosmic" badge
│   ├── Experience.tsx      # Experience timeline
│   ├── Hero.tsx            # Hero section with animations
│   ├── Navigation.tsx      # Main navigation bar
│   ├── Projects.tsx        # Projects showcase
│   ├── ScrollProgress.tsx  # Scroll progress indicator
│   ├── Skills.tsx          # Skills with progress bars
│   └── ThemeToggle.tsx     # Dark/light mode toggle
├── lib/
│   └── cosmic.ts           # Cosmic SDK configuration
├── types.ts                # TypeScript type definitions
└── public/
    └── dashboard-console-capture.js  # Console logging for dashboard
```

## Performance Features

- Server-side rendering for fast initial page load
- Image optimization via imgix
- Lazy loading for images
- Efficient component rendering with React Server Components
- Optimized bundle size with Next.js 15
- Type-safe development with TypeScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

<!-- README_END -->